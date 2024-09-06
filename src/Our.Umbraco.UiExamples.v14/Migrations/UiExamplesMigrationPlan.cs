using Umbraco.Cms.Core.Packaging;

namespace Our.Umbraco.UiExamples.Migrations;

internal sealed class UiExamplesMigrationPlan : PackageMigrationPlan
{
    public UiExamplesMigrationPlan()
        : base("Our.Umbraco.UiExamples", "UI Examples", "UiExamples")
    { }

    public override bool IgnoreCurrentState => false;

    protected override void DefinePlan()
        => To<AddSectionToAdminsMigration>("AddedSectionForAdmins-Ran");
}