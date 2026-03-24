# Troubleshooting

Common issues and solutions
================================================================================


<!-- Source: troubleshooting/index.md -->
# Compose SDK Troubleshooting

These troubleshooting guides contain solutions to common issues you might encounter while using Compose SDK.

<SectionIndex />


<!-- Source: troubleshooting/troubleshooting-cli.md -->
# CLI Troubleshooting

This troubleshooting guide provides possible answers to common issues that may arise when using the Compose SDK CLI.

## Get Data Model Syntax

**Issue:**

When running the CLI command, `get-data-model` to generate the TS/JS representation of my data model there is a `syntax error near unexpected token` error.

**Solution:**

You may be using the wrong format for your arguments.

* For *Windows Powershell* use double quotes for your string type arguments.
* For Linux/MAC only use double quotes for string-type arguments that contain white spaces.

g format for your arguments.

* For *Windows Powershell* use double quotes for your string type arguments.
* For Linux/MAC only use double quotes for string-type arguments that contain white spaces.

## Missing data model

**Issue:**

After generating a TS/JS representation of my data model, I can't locate the generated model.

**Solution:**

1. Check the file path specified for argument `--output`. If you are using a relative path, for example, `--output src/sample-ecommerce.ts`, trace the path from the current directory you are running the CLI command in.
2. If the file is not in the specified directory, check the directory's permissions and make sure you have write access.
3. Check the authentication to your Sisense instance. See, the [Authentication](troubleshooting-setup.md#authentication) section in the Setup and Infrastructure Troubleshooting Guide for more information.
4. Verify that your Sisense instance URL is correct.
5. Verify that your Sisense instance URL is accessible. If it isn't, check your security, firewall, or VPN settings.

## Password Prompt

**Issue:**

When using a token for authentication I still see the `Enter password for username` message.

**Solution:**

Don't provide the `--username` flag together with the `--token` flag.



<!-- Source: troubleshooting/troubleshooting-dependencies.md -->

ee the `Enter password for username` message.

**Solution:**

Don't provide the `--username` flag together with the `--token` flag.



<!-- Source: troubleshooting/troubleshooting-dependencies.md -->
# Dependency Version Troubleshooting

This troubleshooting guide provides possible answers to potential dependency version conflicts that may arise when using Compose SDK, especially when your application and `@sisense/sdk-ui` depend on different versions of the same library.

ible answers to potential dependency version conflicts that may arise when using Compose SDK, especially when your application and `@sisense/sdk-ui` depend on different versions of the same library.

## MUI version conflicts when using `@sisense/sdk-ui`

**Issue:**

After installing `@sisense/sdk-ui` (and related packages such as `@sisense/sdk-shared-ui`), you see one or more of the following:

- TypeScript errors mentioning incompatible types coming from different `@mui/*` packages.
- Build-time bundler errors about missing or renamed exports from `@mui/material` or related packages.
- Multiple copies of the same `@mui/*` package appearing in your dependency tree (for example, different versions used by your app and by `@sisense/sdk-ui`).

**Cause:**

`@sisense/sdk-ui` currently declares a concrete dependency on specific `@mui/*` versions. If your application uses a different major version of MUI (for example, your app uses MUI v5 or v7 while `@sisense/sdk-ui` depends on MUI v6), your package manager may install multiple copies of `@mui/*` or create a type mismatch between the versions used by your app and by `@sisense/sdk-ui`. This can result in type errors, build failures, or runtime issues.

**Solution:**

Use your package manager's capability to **override** or **force-resolve** dependency versions so that **all** packages in your project (including `@sisense/sdk-ui` and `@sisense/sdk-shared-ui`) use a **single, consistent MUI version**.

The exact configuration depends on whether you use `npm`, `yarn`, or `pnpm`. The examples below assume you want to standardize on MUI v5.17.1, but you can replace these versions with the MUI version used in your application.

pends on whether you use `npm`, `yarn`, or `pnpm`. The examples below assume you want to standardize on MUI v5.17.1, but you can replace these versions with the MUI version used in your application.

## Using npm `overrides`

If you are using **npm 8+**, you can use the `overrides` field in your root `package.json` to force all dependencies that depend on `@mui/*` packages (including `@sisense/sdk-ui`) to use the same MUI versions.

In your root `package.json`:

```json
{
  "overrides": {
    "@mui/material": "5.17.1",
    "@mui/system": "5.17.1",
    "@mui/utils": "5.17.1",
    "@mui/icons-material": "5.17.1"
  }
}
```

Then:

1. Delete your lockfile (`package-lock.json`) and MUI-related folders from `node_modules` if necessary.
2. Run `npm install` again.
3. Verify that only the desired MUI package version is installed by checking the application’s dependencies via:

   ```bash
   npm ls <package name>
   ```

All dependencies that depend on `@mui/*` packages (including `@sisense/sdk-ui`) should resolve to the same version.

g the application’s dependencies via:

   ```bash
   npm ls <package name>
   ```

All dependencies that depend on `@mui/*` packages (including `@sisense/sdk-ui`) should resolve to the same version.

## Using Yarn `resolutions`

If you use **Yarn** (classic v1 or modern v2+), you can use the `resolutions` field in your root `package.json` to force a single MUI version.

In your root `package.json`:

```json
{
  "resolutions": {
    "@mui/material": "5.17.1",
    "@mui/system": "5.17.1",
    "@mui/icons-material": "5.17.1",
    "@mui/utils": "5.17.1"
  }
}
```

Then:

1. Delete your lockfile (`yarn.lock`) and MUI-related folders from `.yarn/cache` or `node_modules` if applicable.
2. Run `yarn install` again.
3. Verify that only the desired MUI package version is installed by checking the application’s dependencies via:

   ```bash
   yarn why <package name>
   ```

All dependencies that depend on `@mui/*` packages (including `@sisense/sdk-ui`) should resolve to the same version.

the application’s dependencies via:

   ```bash
   yarn why <package name>
   ```

All dependencies that depend on `@mui/*` packages (including `@sisense/sdk-ui`) should resolve to the same version.

## Using `pnpm.overrides`

If you use **pnpm**, you can configure the `pnpm.overrides` field in your root `package.json` (or `pnpm-workspace.yaml`) to enforce a single MUI version.

In your root `package.json`:

```json
{
  "pnpm": {
    "overrides": {
      "@mui/material": "5.17.1",
      "@mui/system": "5.17.1",
      "@mui/icons-material": "5.17.1",
      "@mui/utils": "5.17.1"
    }
  }
}
```

Then:

1. Delete your lockfile (`pnpm-lock.yaml`) if necessary.
2. Run `pnpm install` again.
3. Verify that only the desired MUI package version is installed by checking the application’s dependencies via:

   ```bash
   pnpm list <package name>
   ```

All dependencies that depend on `@mui/*` packages (including `@sisense/sdk-ui`) should resolve to the same version.

::: tip Note
Most package managers also support **package-scoped overrides/resolutions**, which let you change the MUI version only for specific dependencies (for example, just for `@sisense/sdk-ui` and related Compose SDK packages) instead of globally for the entire application.
The examples above demonstrate how to change the version **globally** at the application level. For package-scoped configuration, please refer to your package manager’s documentation.
:::

plication.
The examples above demonstrate how to change the version **globally** at the application level. For package-scoped configuration, please refer to your package manager’s documentation.
:::

## Verifying that the conflict is resolved

After applying overrides with your package manager:

1. **Inspect the dependency tree** using the commands shown above to confirm that all `@mui/*` packages resolve to your chosen version.
2. **Rebuild and type-check** your application.
3. **Manually test** the application to ensure that no runtime issues occur.

If issues persist after enforcing a single MUI version, collect:

- The versions of `@sisense/sdk-ui` and the `@mui/*` packages you are using.
- The output of your dependency tree inspection (for example, `npm ls @mui/material`).
- Any build or runtime error messages.

Then contact Sisense Support and include this information to aid further investigation.



<!-- Source: troubleshooting/troubleshooting-genai.md -->
# Generative AI Troubleshooting

This troubleshooting guide provides possible answers to common issues that may arise when using the Compose SDK Generative AI components.

::: tip Note
For more information on requirements for enabling Generative AI features, please refer to the [Generative AI documentation](https://docs.sisense.com/main/SisenseLinux/genai.htm)
:::

s.

::: tip Note
For more information on requirements for enabling Generative AI features, please refer to the [Generative AI documentation](https://docs.sisense.com/main/SisenseLinux/genai.htm)
:::

## Component Errors

Here are some common errors that you may encounter.

#### Blank screen with Uncaught SyntaxError: The requested module [...] does not provide an export named 'AiContextProvider'

Check that you are importing from `@sisense/sdk-ui/ai` and not `@sisense/sdk-ui`.

#### Error: No QueryClient set, use QueryClientProvider to set one

Check that your app is wrapped in an `AiContextProvider`.

#### `<Chatbot />` shows infinite loading icon

Check that your app is wrapped in an `AiContextProvider`.



<!-- Source: troubleshooting/troubleshooting-runtime.md -->
# Runtime Troubleshooting

This troubleshooting guide provides possible solutions to common issues that may arise when executing Compose SDK code.

<!--
Additional categories of potential troubleshooting.
## Data Models

Use of invalid data options. - Solution is to validate data correctly.

-->
## Chart Configurations

**Issue:**
There are double labels in my chart.

**Solution:**
You may be using multiple categories with labels. Use only one category instead.

<!--
Additional categories of potential troubleshooting.
### Filter configurations

-->

s in my chart.

**Solution:**
You may be using multiple categories with labels. Use only one category instead.

<!--
Additional categories of potential troubleshooting.
### Filter configurations

-->
## Event Handlers

**Issue:**

My chart isn’t updating when I select filter values.

**Solution:**

1. Check the callback for filter change in the filter component.
2. Check to make sure that your callback affects the state of the chart.

**Issue:**

When clicking a point in my chart nothing happens.

**Solution:**

1. Check to make sure you provide a callback.
2. Check to make sure that your callback affects the state of the chart.



<!-- Source: troubleshooting/troubleshooting-setup.md -->
# Setup and Infrastructure Troubleshooting

This troubleshooting guide provides possible answers to common issues that may arise when trying to install Compose SDK using `yarn` or `npm`.

etup.md -->
# Setup and Infrastructure Troubleshooting

This troubleshooting guide provides possible answers to common issues that may arise when trying to install Compose SDK using `yarn` or `npm`.

## Error Messages

| **Action**             | **Error Message/Behavior**                                                                                           | **Solution/Workaround**                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|------------------------|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `yarn install`         | RequestError: unable to get local issuer certificate                                                                 | Check your Internet security firewalls or VPNs to see if external access is blocked.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `yarn install`         | Invalid authentication (as an anonymous user)                                                                        | Configure your personal access token for the GitHub Packages Registry (GPR). <br /> Try deleting `yarn.lock` and running `yarn cache clean --all` before running `yarn install` again. <br /><br /> Note that since version `0.11.3`, the SDK packages are hosted on public NPM registry. Consider upgrading SDK to the latest version and removing the configuration for GPR.                                                                                                                        |
| `yarn install`         | No `@sisense/sdk\*` modules installed in `node\_modules` causing the CLI command to fail to generate the data model  | Check if `Yarn Plug'n'Play` is enabled by checking to see if `pnp.cjs` is in the root folder after running `yarn install`. To fix, add `nodeLinker: node-modules` to your `.yarnrc.yml` file located in the root folder and run `yarn install` again.                                                                                                                                                                                                                                                 |
| CLI command with `npx` | No output in the console and the data model file is not generated                                                    | Check if `Yarn Plug'n'Play` is enabled by checking to see if `pnp.cjs` is in the root folder after running `yarn install`. <br /><br />This feature is available in **Yarn 4.x**, which is not a stable version. To fix, switch to Yarn version 3.x (stable) by running the command `yarn set version stable`. Run `yarn -v` to see your current version, and verify that version 3.x is used. <br /><br />Run `yarn install` to install the packages again. <br /><br />Run the `npx` command again. |

sion stable`. Run `yarn -v` to see your current version, and verify that version 3.x is used. <br /><br />Run `yarn install` to install the packages again. <br /><br />Run the `npx` command again. |

## Authentication

**Issue:**

I can't access my Sisense instance.

**Solution:**

First check that you can access your Sisense instance directly. If this works, then check your authentication methods to see if they are configured correctly. You can use the following authentication methods:

* [SSO](../getting-started/authentication-security.md#single-sign-on)
* [Web access tokens](../getting-started/authentication-security.md#web-access-token)
* [Sisense API token](../getting-started/authentication-security.md#api-token)

## Browser Security

**Issue:**

There is a warning saying that my app website is not secure.

**Solution:**
1. This warning is displayed on any page served over an insecure protocol such as HTTP. Contact your administrator to resolve it by enabling the HTTPS protocol.
2. This may be an issue with SSL certificate. Contact your administrator to correct the certificate or to make a new one available for you to use.
3. This may be a conflict with your anti-virus software and your corporate network. Contact your administrator for more assistance.



================================================================================

conflict with your anti-virus software and your corporate network. Contact your administrator for more assistance.



================================================================================
