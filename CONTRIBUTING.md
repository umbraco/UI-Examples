# Contributing Guidelines

If you want to add more UI Examples to this package, please [raise an issue](./issues) so we can discuss it with your first.

## Working locally
To develop the package you will need to first run this project locally. 

Once you have downloaded this repository, you should open up the solution in visual studio

### Stating with a blank Installation
The first time you run this project you will need to start with a blank Umbraco website. to start the umbraco site installation. 

In the UIExamples.Website project

1. Remove the UmbracoDSN Connection string from the web.config
2. Blank the Umbraco.Core.ConfigurationStatus value in the web.config

Run the project - following the installation instructions for umbraco. 

**DO NOT INSTALL THE STARTER KIT** it will only add addtional files that are not needed to your repository.