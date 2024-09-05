# UI Examples for Umbraco 14

## Prerequisites
As Umbraco 14 runs on .NET 8 you must have the SDK installed on your machine. This can be installed through [Visual Studio v17.8.0 Preview 2](https://visualstudio.microsoft.com/vs/preview/), or direct download on the [.NET website](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).

## How this works

go into `src`  
run `npm ci`  
run `npm run dev`  

This will build the typescript, output it into the folder within the Umbraco 14 website for use in there, more specifically: `/samples/Umbraco14.Website/App_Plugins/Example.UI/scripts`.

## Running the Umbraco14 website

In a separate terminal window, to run the umbraco project, open the path /samples/Umbraco14.Website/

run `dotnet run`

You can then launch the umbraco solution and should see the new back office section.

> [!NOTE]  
> For a more general introduction into getting started with development for v14, please read the [Umbraco Documentation](https://docs.umbraco.com/umbraco-backoffice/)
