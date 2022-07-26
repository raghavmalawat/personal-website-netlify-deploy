---
category: 'blog'
cover: './partial-indexing.png'
title: 'Partial Indexes - When to use and when not to'
description: 'Speed up retrieval actions on your data.'
date: '2022-06-26'
tags: ['PostgreSQL', 'DB Indexes', 'RelationalDB']
published: true
---
**Introduction to Indexes**

Before we jump right into what is partial indexes and its probable use cases, lets understand what is indexing and why it is important.

A database index improves the speed of data retrieval operations, quickly find your data without searching all the rows. This means you query and get results quicker. Sounds nice and clean, but, remember there’s no such thing called a free lunch, benefits of indexing comes at the cost of additional writes and the storage space to store the index data structure.

Now that we know what indexes are in general, let us jump into partial indexes and how it can be more useful in some special use cases.

<br>

**What is Partial Indexing?**

Partial Indexes allows one to index a subset of rows, one can add a “WHERE” condition selecting only the rows where you know you have your answer. While index serves the purpose, it includes many rows that are never searched. Finding a fancy ball in a small bag is much easier and faster than in a big one containing more balls.

A partial index is useful for commonly used where conditions that have certain constant values like NULL or an enum value, etc.

<br>

<iframe
src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=sql&width=675&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=24px&ph=21px&ln=false&fl=1&fm=Hack&fs=14px&lh=181%25&si=false&es=1x&wm=false&code=SELECT%2520name%252C%2520desription%252C%2520status%250AFROM%2520articles%250AWHERE%2520status%2520%253D%2520%27PUBLISHED%27%253B"
style="width: 875px; height: 198px; border:0; transform: scale(1); overflow:hidden;"
sandbox="allow-scripts allow-same-origin">
</iframe>

<br>

The index only contains rows that satisfy the where clause, this means the index reduces its size in two directions, vertically by including only a subset of rows and horizontally  by only considering the columns that will be queried.

<br>

**Use Case and Benefits**

Now let’s see some use cases where you can use partial indexes and optimise the database calls.

<br>

<b>Querying frequently on subset of rows</b>

Let’s say a CMS tool needs to have a functionality of displaying only “PUBLISHED” articles to the end users. But for authors they can choose to keep the articles in “DRAFT” or “PUBLISHED” state.

In this case we will be making paginated queries for only the “PUBLISHED” articles.

<br>

<iframe
src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=sql&width=675&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=24px&ph=21px&ln=false&fl=1&fm=Hack&fs=14px&lh=181%25&si=false&es=1x&wm=false&code=SELECT%2520*%2520FROM%2520articles%2520WHERE%2520status%2520%253D%2520%27PUBLISHED%27%253B"
style="width: 875px; height: 147px; border:0; transform: scale(1); overflow:hidden;"
sandbox="allow-scripts allow-same-origin">
</iframe>

<br>

<b>Use UNIQUE constraint to allow only 1 active record</b>

<br>

Let’s say now you have a functionality that the author can save multiple “DRAFT” entries for an article but only 1 “PUBLISHED” entry at a time. If we need to add a unique constraint to allow only 1 article of same type to exist for an author, this feature we can use partial indexes and get going.

<br>

<iframe
src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=sql&width=675&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=24px&ph=21px&ln=false&fl=1&fm=Hack&fs=14px&lh=181%25&si=false&es=1x&wm=false&code=CREATE%2520UNIQUE%2520INDEX%2520article_published_constraint%2520%250AON%2520articles%2520%28author_id%252C%2520article_type%29%250AWHERE%2520status%2520%253D%2520%27PUBLISHED%27%253B"
style="width: 875px; height: 198px; border:0; transform: scale(1); overflow:hidden;"
sandbox="allow-scripts allow-same-origin">
</iframe>

<br>

This can also be useful when one has a use case of soft deleting records and only allow 1 active entry to exist at a time on certain columns. Partial indexes can be used to create unique constraint with an IS NULL restriction.

<br>

**When not to use Partial Indexes**

Don’t use partial indexes as a substitute for partitioning, its a different problem and needs a different solution.

Eg: If the status can have only 2 values “PUBLISHED” and “DRAFT”, there is no point creating 2 partial indexes one on each status type. This is no better than a simple index on status column.


