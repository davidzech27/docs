---
title: 'Service tokens'
subtitle: 'Learn how to work with service tokens, an alternate way to autheticate with PlanetScale using the CLI.'
date: '2022-09-01'
---

## Overview

PlanetScale provides the ability to create service tokens for your PlanetScale organization via the CLI or directly in the UI. Service tokens provide an alternate authentication method to be used with the PlanetScale CLI and are typically used in automated scenarios where `pscale auth login` cannot be used.

{% callout type="warning" %}
Service tokens are not recommended for connecting to production databases. Instead, connect securely to your database
using PlanetScale [connection strings](/docs/concepts/connection-strings).
{% /callout %}

## Create service tokens using the PlanetScale dashboard

To create a service token using the dashboard, log into your organization and click **"Settings"** > **"Service tokens"** > **"New service token"**.

![Service token settings page](/docs/concepts/service-tokens/service-tokens-settings-page.png)

Give the token a name (this is used for your reference only) and click **"Create service token"**.

![New service token pop-up modal](/docs/concepts/service-tokens/new-service-token-modal.png)

The modal will update, displaying your service token where the Name field was. Copy the token and click **"Edit token permissions"** to proceed.

{% callout type="tip" %}
Be sure to copy the service token after you create it. There's no way to retrieve the token value once you leave this page.
{% /callout %}

![Service token detail page](/docs/concepts/service-tokens/modal-with-service-token.png)

Copy the ID of the service token as it is required to use the service token with the CLI.

Service tokens are configured with granular permissions per database. Before you can use a service token, these permissions must be added. Click **"Add database access"** to open the Database access permissions modal.

![The service token configuration view.](/docs/concepts/service-tokens/service-token-add-db-access.png)

Select the database you want to grant access for and check the box next to each permission option you need to grant. Once you are done, click **"Save permissions"**.

![The Database access permissions modal.](/docs/concepts/service-tokens/db-access-permissions.png)

Your service token is now configured for use with the PlanetScale CLI.

## Use a service token with the PlanetScale CLI

To use service tokens with the PlanetScale CLI, set the following environment variables in your terminal:

```bash
export PLANETSCALE_SERVICE_TOKEN=<YOUR_SERVICE_TOKEN>
export PLANETSCALE_SERVICE_TOKEN_ID=<YOUR_SERVICE_TOKEN_ID>
```

When you execute commands using the PlanetScale CLI, it will automatically parse those values and use them to access the service. However, you’ll also need to pass in your organization name using the `--org` flag like so:

```bash
pscale branch create <DB_NAME> <BRANCH_NAME> --org <ORG_NAME>
```

If you don’t want to set environment variables, you may also pass in the Service Token and Service Token ID by using the [`--service-token` and `--service-token-id` flags](/docs/reference/service-token) respectively:

```bash
pscale branch create <DB_NAME> <BRANCH_NAME> --org <ORG_NAME> --service-token <SERVICE_TOKEN> --service-token-id <SERVICE_TOKEN_ID>
```

## Modify service token database permissions

If you want to modify the permissions granted to a service token for a specific database, open the service token from the settings pane and click **"Manage permissions"** for the database permissions you want to modify.

![The location of the Manage permissions option.](/docs/concepts/service-tokens/modify-db-perms.png)

This will open a modal that allows you to modify the permissons the service token has to access that database.

![The Database access permissions modal while modifying permissions.](/docs/concepts/service-tokens/modify-db-access-perms-modal.png)

To remove access to a database entirely, click **"Remove access"** on the line for that database.

![Remove database access for a service token.](/docs/concepts/service-tokens/service-token-remove-access.png)

## Delete a service token

You can delete a service token at any time from the service token detail page. Simply click the **"Delete service token"** button.

![Delete service token.](/docs/concepts/service-tokens/delete-service-token.png)

Deleting a service token will sever any database connections that use the given service token.

## Manage service tokens using the PlanetScale CLI

Service tokens can also be created and managed directy from the [PlanetScale CLI](/docs/reference/service-token).

### Create a new service token

Use the following command to create a service token:

```bash
pscale service-token create
```

This command will return a service token ID and value for your use.

### Add database access permissions

You can add database access permissions to your service token for each database in your organization.

To add database access permissions, use the command:

```bash
pscale service-token add-access <SERVICE_TOKEN_ID> <ACCESS_PERMISSION> --database <DB_NAME>
```

For example, to give a service token the ability to create, read, and delete branches on a specific database, use the following command:

```bash
pscale service-token add-access <SERVICE_TOKEN_ID> read_branch delete_branch create_branch --database <DB_NAME>
```

A complete list of service token access permissions can be found [here](/docs/reference/planetscale-cli#service-tokens-in-organizations).

### Remove database access permissions

You can also remove database access permissions for a service token.

Use the following command to remove one or more permissions:

```bash
pscale service-token delete-access <SERVICE_TOKEN_ID> <ACCESS_PERMISSION> --database <DB_NAME>
```

### Delete a service token

To delete a service token, run the following command:

```bash
pscale service-token delete <SERVICE_TOKEN_ID>
```

Deleting a service token will sever any database connections that use the given service token.
