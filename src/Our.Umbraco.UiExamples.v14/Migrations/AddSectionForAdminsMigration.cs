using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Infrastructure.Migrations;
using Umbraco.Cms.Infrastructure.Scoping;

namespace Our.Umbraco.UiExamples.Migrations;

internal sealed class AddSectionToAdminsMigration : MigrationBase
{
    private readonly IScopeProvider _scopeProvider;
    private readonly IUserService _userService;

    public AddSectionToAdminsMigration(IMigrationContext context, IScopeProvider scopeProvider, IUserService userService)
        : base(context) 
    {
        _userService = userService;
        _scopeProvider = scopeProvider;
    }

    protected override void Migrate()
    {
        using var scope = _scopeProvider.CreateScope();

        var adminGroup = _userService.GetUserGroupByAlias(Constants.Security.AdminGroupAlias);
        adminGroup.AddAllowedSection("example.ui.section");

        _userService.Save(adminGroup);

        scope.Complete();
    }
}