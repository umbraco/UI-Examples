using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Migrations;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Scoping;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Infrastructure.Migrations.Upgrade;

namespace Our.Umbraco.UiExamples.Migrations
{
    public class UmbracoAppStartingHandler : INotificationHandler<UmbracoApplicationStartingNotification>
    {
        private readonly IRuntimeState _runtimeState;
        private readonly IMigrationPlanExecutor _migrationPlanExecutor;
        private readonly IScopeProvider _scopeProvider;
        private readonly IKeyValueService _keyValueService;

        public UmbracoAppStartingHandler(IRuntimeState runtimeState, IMigrationPlanExecutor migrationPlanExecutor, IScopeProvider scopeProvider, IKeyValueService keyValueService)
        {
            _runtimeState = runtimeState;
            _migrationPlanExecutor = migrationPlanExecutor;
            _scopeProvider = scopeProvider;
            _keyValueService = keyValueService;
        }

        public void Handle(UmbracoApplicationStartingNotification notification)
        {
            if (_runtimeState.Level == global::Umbraco.Cms.Core.RuntimeLevel.Run)
            {
                var upgrader = new Upgrader(new UiExamplesMigrationPlan());
                upgrader.Execute(_migrationPlanExecutor, _scopeProvider, _keyValueService);
            }
        }
    }
}