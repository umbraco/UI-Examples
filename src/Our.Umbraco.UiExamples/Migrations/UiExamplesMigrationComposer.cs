#if NETCOREAPP
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
#else
using Umbraco.Core;
using Umbraco.Core.Composing;
#endif

namespace Our.Umbraco.UiExamples.Migrations
{
#if NETCOREAPP
    public class UiExamplesMigrationComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.AddNotificationHandler<UmbracoApplicationStartingNotification, UmbracoAppStartingHandler>();
        }
    }
#else
    [RuntimeLevel(MinLevel = RuntimeLevel.Run)]
    public class UiExamplesMigrationComposer : ComponentComposer<UiExamplesMigrationComponent>, IUserComposer
    { }
#endif
}