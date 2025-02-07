# Getting started with the examples

To get started, open the `UI Examples.sln` file in the root and run one of the websites within the `Examples` folder.

The project will boot into an empty Umbraco site. Navigate to the backoffice and user the credentials in the `appsettings.json` to login.

You will see a new section for `UI Examples` which contains the work from the `Our.Umbraco.UiExamples.v13` and `Our.Umbraco.UiExamples.v15` in their respective sites.

## Making changes

Both projects will automatically compile and bring the assets into the example sites when building.

**Quicker dev in v15** can be acheived by opening the `Our.Umbraco.UiExamples.v15` in the command line/terminal and running the `npm run dev` command (make sure to either build or run `npm ci` first to install node dependencies).

## Troubleshooting

If you receive errors about node commands during build, make sure that you have the correct version of node installed (22.12.0 at the time of writing). You can also try running the command that outputs directly in the command line/terminal to get a more verbose reason.
