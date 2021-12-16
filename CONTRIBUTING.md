# Contributing guidelines
If you want to add more UI examples to this package, please [raise an issue](./issues) so we can discuss it with you first.

## Working locally
Open the solution file `UI Examples.sln` in Visual Studio. You will see three projects:
- `Our.Umbraco.UiExamples` is the main project containing the files that you will be working with
- `Umbraco8.Website` is an Umbraco v8 test site
- `Umrbaco9.Website` is an Umbraco v9 test site

Steps to get the two test sites working:
- Build the solution
- Run both test websites to run an unattended install (using a SQL CE database)
- Login to the backoffice using:
  - Username: uiexamples@example.com
  - Password: 1234567890

## Making changes
The files you will be working on are in the `App_Plugins` folder in the main `Our.Umbraco.UiExamples` project. Changed files need to be copied into the test websites so you can confirm they work, which is automatically done when building the test websites (using a MSBuild target).

### Adding a new UI example
Create a new folder in `Our.Umbraco.UiExamples\App_Plugins\uiexamples` and add a `package.manifest` file, an HTML view and JavaScript/CSS files (if needed).

Refer to the existing examples to see the naming conventions expected.

If you need to include text in the view, you should add a `lang` folder with a language file (see the other folders for examples). It contains key/value pairs that can be referenced in the HTML.

#### Adding a new Content App tab
Each example is linked to from a Content App tab in the section header.

To add a new tab, edit `Our.Umbraco.UiExamples\App_Plugins\uiexamples.section.controller.js` and add a new navigation element that references your new view.