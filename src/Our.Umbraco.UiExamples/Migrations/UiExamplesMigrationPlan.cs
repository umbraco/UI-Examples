using Umbraco.Core.Migrations;

namespace Our.Umbraco.UiExamples.Migrations
{
    public class UiExamplesMigrationPlan : MigrationPlan
    {
        public UiExamplesMigrationPlan() : base("UiExamples")
        {
            From(string.Empty).To<AddSectionToAdminsMigration>("AddedSectionForAdmins-Ran");
        }
    }
}