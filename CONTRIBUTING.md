# Contributing Guidelines

If you want to add more UI Examples to this package, please [raise an issue](./issues) so we can discuss it with you first.

## Working locally

To develop the package you will need to run this project locally. Download this repository then before you open Visual Studio, open a command prompt in the solution folder and run:

```
npm install
```

Now open the solution file `UiExamples.sln` in Visual Studio. You will see three projects:

- `Our.Umbraco.UiExamples` is the main project containing the files that you will be working with
- `UIExamples.v8.Website` is an Umbraco v8 test site
- `UIExamples.v9.Website` is an Umbraco v9 test site

Steps to get the two test sites working:

- Open the 'Task Runner Explorer' window (if not already open) from the menu: View > Other Windows > Task Runner Explorer

- Build the solution

- In the Task Runner Explorer check if the 'default' gulp task is running. If it isn't then expand Gulpfile.js and run the 'default' task. This task copies the main `App_Plugins` folder into the two test sites. Whilst the task is running any updated files will be copied over automatically.

- Edit `UIExamples.v8.Website\web.config`:
  - Clear the `Umbraco.Core.ConfigurationStatus` value
  - Remove the `umbracoDbDSN` connection string

- Edit `UIExamples.v9.Website\appsettings.json`:
  - Clear the `UmbracoDbDSN` connection string value

- Run both test websites and follow the Umbraco installation instructions. **Do NOT install the starter kit** as it will only add additional files that are not needed to your repository

## Making changes

The files you will be working on are in the `App_Plugins` folder in the main `Our.Umbraco.UiExamples` project. Changed files need to be copied into the test websites so you can confirm they work. As explained above there is a gulp task that will do the copying for you automatically. If you haven't started the task via the Task Runner Explorer you can instead open a command prompt in the root of the solution and run:

```
npm install
npm install gulp -g
gulp
```

### Adding a new UI example

Create a new folder in `Our.Umbraco.UiExamples\App_Plugins\`, and add a `package.manifest` file, a html view, and javascript files (if needed).

Refer to the existing examples to see the naming conventions expected.

If you need to include text in the view you should add a `lang` folder with a language file (see the other folders for examples). It contains key value pairs that can be referenced in the html.

#### Adding a new content app tab

Each example is linked to from a content app tab in the section header.

To add a new tab, edit `Our.Umbraco.UiExamples\App_Plugins\uiexamples.section.controller.js` and add a new navigation element that references your new view.