#if NETCOREAPP
using Umbraco.Cms.Infrastructure.Migrations;
#else
using Umbraco.Core.Migrations;
#endif

namespace Our.Umbraco.UiExamples.Migrations
{
    public class UiExamplesMigrationPlan : MigrationPlan
    {
        public UiExamplesMigrationPlan()
            : base("UiExamples")
        {
            From(string.Empty).To<AddSectionToAdminsMigration>("AddedSectionForAdmins-Ran");
        }
    }
}