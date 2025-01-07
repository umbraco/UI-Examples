using Umbraco.Cms.Infrastructure.Migrations;

namespace Our.Umbraco.UiExamples.v13.Migrations
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