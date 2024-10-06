# Umbraco UI Examples
> [!IMPORTANT]  
> Hey you! Are you looking to get involved in development of the Umbraco 14 version? Head over to the [issues tagged with Umbraco 14](https://github.com/umbraco/UI-Examples/issues?q=is%3Aissue+is%3Aopen+label%3A%22Umbraco+14%22) ripe for the picking.
 
UI Examples is a package that adds a new 'UI Examples' section to your Umbraco instance with working examples of how to customise the backoffice. During installation the Administrators user group will be given access to the section.

https://our.umbraco.com/packages/developer-tools/ui-examples/

Examples include:
- UmbBox
- Layout
- Dialogs
- Icons
- Buttons
- Tabs
- Editor Panels
- Alerts

> This repository contains examples of the current backoffice UI, which are not (yet) based on the new [Umbraco UI Library](https://github.com/umbraco/Umbraco.UI).

## Installing the Package 
Umbraco v8: the UI Examples package can be added via the Package section of the backoffice *or* using NuGet (e.g. from the Package Manager Console: `Install-Package Our.Umbraco.UiExamples`).

Umbraco v9: install the NuGet package using `dotnet add package Our.Umbraco.UiExamples` *or* manually adding a `PackageReference` to your project file.

## Contributing
Contributions are welcome! Please refer to the [issues list](./issues) for ideas of where help is needed.

Please read our [contribution guidelines](./CONTRIBUTING.md) for more information.
