
#if NETCOREAPP
using Umbraco.Cms.Core.Scoping;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core;
using Umbraco.Cms.Infrastructure.Migrations;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Web;
#else 
using Umbraco.Core;
using Umbraco.Core.Migrations;
using Umbraco.Core.Scoping;
using Umbraco.Core.Services;
using Umbraco.Web;
#endif


namespace Our.Umbraco.UiExamples.Migrations
{
    public class AddSectionToAdminsMigration : MigrationBase
    {
        private readonly IUmbracoContextFactory _context;
        private readonly IScopeProvider _scopeProvider;
        private readonly IUserService _userService;

        public AddSectionToAdminsMigration(IMigrationContext context,
            IUmbracoContextFactory umbracoContextFactory,
            IScopeProvider scopeProvider,
            IUserService userService) : base(context) 
        {
            _userService = userService;
            _context = umbracoContextFactory;
            _scopeProvider = scopeProvider;
        }

#if NETCOREAPP
        protected override void Migrate()
#else
        public override void Migrate()
#endif       
        {
            using (UmbracoContextReference umbracoContextReference = _context.EnsureUmbracoContext())
            {
                using (var scope = _scopeProvider.CreateScope())
                {
                    var adminGroup = _userService.GetUserGroupByAlias(Constants.Security.AdminGroupAlias);
                    adminGroup.AddAllowedSection("uiExamples");

                    _userService.Save(adminGroup);

                    scope.Complete();
                }
            }

        }
    }
}