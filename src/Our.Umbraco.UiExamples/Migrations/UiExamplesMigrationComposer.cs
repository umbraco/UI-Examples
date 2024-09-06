using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Notifications;


namespace Our.Umbraco.UiExamples.Migrations
{
    public class UiExamplesMigrationComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.AddNotificationHandler<UmbracoApplicationStartingNotification, UmbracoAppStartingHandler>();
        }
    }

}