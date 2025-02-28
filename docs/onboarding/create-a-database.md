---
title: Create a database
subtitle: Learn the basics of the PlanetScale dashboard by creating your first database.
date: '2022-09-13'
---

{% vimeo src="https://player.vimeo.com/video/748938085" caption="Explore the PlanetScale dashboard" /%}

## Overview

This article is a continuation of the Onboarding series and is the next step after [creating an account in PlanetScale](/docs/onboarding/create-an-account). We’ll cover:

- Creating your first database on PlanetScale.
- Using the Console to create a schema and add some data.

This guide will use a database schema simulating a travel booking agency application, specifically around hotels with their name, address, and rating.

{% callout %}
A schema refers to the structure of the database. The most common parts of a schema are tables and the columns those tables contain. We’ll be working with both in this guide.
{% /callout %}

## Create a database

If you’ve come here directly from creating your account, you should be at one of the following two screens.

The first one is presented right after you verify your email address. Click **"create"** if you are here.

![The first screen you’ll see after signing up for PlanetScale.](/docs/onboarding/create-a-database/the-first-screen-youll-see-after-signing-up-for-planetscale.png)

The second possible screen will be shown if you’ve stepped through the in-app guide. Click **"Create your first database"** if you are here.

![The screen you’ll see after stepping through the wizard after creating an account.](/docs/onboarding/create-a-database/the-screen-youll-see-after-stepping-through-the-wizard-after-creating-an-account.png)

A modal should appear asking you to name the database and select the region. There are several geographical regions you can host your database. Typically you’d want to select the region closest to your users when creating a database. For this example, leave the region set to "AWS us-east-1" and name the database `travel_db`. Click **"Create database"**.

![The New database modal.](/docs/onboarding/create-a-database/the-new-database-modal.png)

Next, you’ll be dropped into the dashboard for that specific database. Let's take a look at the layout and what each element does before moving on.

1. **Overview** &mdash; The current tab showing an overview of your database.
2. **Deploy requests** &mdash; How you apply changes to your database schema. More on that in the next article.
3. **Branches** &mdash; View the different branches of your database. Again, more on that in the next article.
4. **Insights** &mdash; Provides statistics on database operations that may be affecting performance.
5. **Backups** &mdash; Shows you backup schedule and all backups for this database across production and development branches.
6. **Settings** &mdash; Lets you tweak various aspects of your database like who has access to it, beta feature opt-ins, and plan management.
7. **Connect** &mdash; Provides connection details that applications can use to connect to your database.
8. **New branch** &mdash; Allows you to create a new branch of your schema.

![The dashboard of a database on PlanetScale.](/docs/onboarding/create-a-database/the-dashboard-of-a-database-on-planetscale.png)

Now let’s add a table and some columns to the database. PlanetScale databases leverage branches to let you create copies of your database so you can safely experiment with the schema without affecting your main production database. Branches will be covered more in detail in the next article, but since they are an integral part of the system, you’ll always be working within a database branch. The default branch created for all databases is `main`. Click on **"Branches"**, then select `main` from the list.

![The default list of branches after creating a database.](/docs/onboarding/create-a-database/the-default-list-of-branches-after-creating-a-database.png)

You should notice the breadcrumbs have changed to include the name of the database, as well as the tabs in the top nav.

1. **Overview** &mdash; The current view showing the branch overview.
2. **Console** &mdash; Lets you run MySQL commands against this branch.
3. **Schema** &mdash; Shows the active schema of the branch.
4. **Insights** &mdash; Provides statistics on database operations for the branch.
5. The option to promote a branch to production.

![The dashboard of a database branch on PlanetScale.](/docs/onboarding/create-a-database/the-dashboard-of-a-database-branch-on-planetscale.png)

Click on **"Console"** to get access to an in-browser MySQL shell for the selected database branch. Run the following command in that console to create your first table:

```sql
CREATE TABLE hotels(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(50) NOT NULL,
  stars FLOAT(2) UNSIGNED
);
```

![The Console view of a database branch, with the output of the CREATE TABLE statement.](/docs/onboarding/create-a-database/the-console-view-of-a-database-branch-with-the-output-of-the-create-table-statement.png)

Now run the following command to see the structure of the table that was just created:

```sql
DESCRIBE hotels;
```

![The output of the DESCRIBE statement.](/docs/onboarding/create-a-database/the-output-of-the-describe-statement.png)

{% callout title="Next steps" %}
In this guide, we explored the PlanetScale dashboard, created a database, and created a simple table in that database. Next, we’ll explore the concept of database branching and how it can fit into your development workflow.

- [Branching and Deploy RequestsConnect to your database](/docs/onboarding/branching-and-deploy-requests)

{% /callout %}
