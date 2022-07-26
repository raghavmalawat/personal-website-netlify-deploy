---
category: 'blog'
cover: './flipper_banner.jpeg'
title: 'Develop right the feature flag way'
description: 'If one wants to ship code frequently, and get the feels of testing in production, adoption of feature flags is the way to go.'
date: '2021-12-27'
tags: ['Feature Flags', 'Rails', 'Ruby']
published: true
---
**Introduction**

The usage of feature flags in the modern world of software development has transformed the
development, testing and the entire process of shipping features drastically. In simple words,
feature flags merely act as a switch that toggles product features in your application on and off at
any given point without needing one to deploy new code.

Provides the flexibility to freely experiment and have control over the entire feature lifecycle.
The objective of introducing feature flags is to minimize the time taken for a developed feature to
be rolled out to customers and even perform A/B tests for a set of users on a set of features before
rolling it out to a broader set of customers.

<br>

**Use Case and Benefits**

<br>

**Canary Testing**

Feature releases of a product impacts the product adoption massively and hence has to be done in
an incremental way, in a phased approach. Rolling the new feature out to a subset of customers
and tracking the adoption and usability can turn out to be a minimal risk way of bringing new
features out. If the feature is well adopted and the feedback is positive the said feature can be
rolled out to a broader set of customers.

This can be achieved in 2 ways, either split traffic at server level to roll over traffic from one version
of an app to another or at a feature level where maybe 2% of users are experiencing a diff flow
altogether using feature flags.
With this monitoring key engineering and business metrics like error rates, app latencies and
various click and funnel metrics can be tracked giving an idea of the value the feature has been
able to provide.

<br>

**A/B Testing**

A/B testing is an experimentation process where different versions of a feature/design are shown to
different segments of users at the same time which eventually helps in drawing inferences about
the adoption and the impact created.

Feature flags help the product/operations teams not get blocked by engg bandwidth and freely
carry out experiments on a certain set of user base. For example if the application supports
multiple languages tests can be carried out for users using the app only in english or japanese
maybe as those set of users can be directed to a diff flow whereas others to a different flow.

<br>

**Continuous Delivery**

Feature flagging acts as a catalyst in the process of continuous delivery for leading software
companies across the globe. Continuous Delivery is the discipline where the software can be
shipped to the production environment at any time, keeping the deployment time less than 15
minutes generally.

Acting as a key factor in the process of CI/CD, new features can be rolled out and kept behind
feature flags turned off, not blocking the PR’s from getting merged. At the right time when the
feature has to be turned on, a single feature toggle should be able to enable the feature and not
require a separate deployment.

<br>

**Rollbacks and Kill Switch**

App deployments are a tedious task, one has to go through the whole process of getting the app
store reviews and stuff. Now imagine if there’s a major security bug in our app build and as a fix the
team has decided to roll back the recently developed feature. In such cases feature flags come to
the rescue, rather than re-deploying the earlier build or maybe removing some features and
generating a new build and going through the tedious process all again, we just turn off our feature
which exists behind a feature flag. Isn’t it much easier? This can be extended to backend
deployments too but assuming we are working in CI/CD fashion backend deployments are not time-consuming.

<br>

**Testing in Production**

At times there are certain features which have to go through a round of testing on the production
environment irrespective of having unit tests and manual verification on staging/testing
environment. Replicating the subset of prod data on staging and testing is difficult and for a
complex system does not instill enough confidence. Feature flags can act as a facilitator here
helping the team test such new features in production. If things run well in prod feature flags can
be turned on thereafter.

<br>

**Feature Flags in Ruby**

<br>

**[Flipper](https://github.com/jnunemaker/flipper)** - Beautiful, performant feature flags for Ruby.


<br>

Since we now know what feature flags are, we can jump onto the implementation then.
We know that the configurations and settings should be saved somewhere, during runtime whose
values get picked and appropriate product flow is executed.

The very first thing popping in our heads is why not keep them as environment variables or configs
in a YAML file. Sure we can but this still requires a re-deployment everytime it needs to be toggled.
It needs a more robust and safe storage mechanism, hence separate tables managing this
environment basis would be ideal.


<br>

Flipper is one such gem which provides us an easy way to integrate feature flags in our code bases.

One can use rails console or a simple to use Admin UI to toggle features on the fly.

Here’s a 4-step approach to help you integrate feature flags in your Ruby code

<br>

**1.. Add the following gems to your Gemfile and install them**

<br>

<iframe
src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=ruby&width=675&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=24px&ph=21px&ln=false&fl=1&fm=Hack&fs=14px&lh=181%25&si=false&es=1x&wm=false&code=%2520gem%2520%2522flipper%2522%250A%2520gem%2520%2522flipper-ui%2522%250A%2520gem%2520%2522flipper-active_record%2522%250A%250A%2520RUN%2520bundle%2520install"
style="width: 875px; height: 249px; border:0; transform: scale(1); overflow:hidden;"
sandbox="allow-scripts allow-same-origin">
</iframe>

<br>

**2.. RUN below commands to generate migration files for flipper tables**

<br>

<iframe
src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=ruby&width=675&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=24px&ph=21px&ln=false&fl=1&fm=Hack&fs=14px&lh=181%25&si=false&es=1x&wm=false&code=%2520RUN%2520bin%252Frails%2520g%2520flipper%253Aactive_record%250A%2520RUN%2520bin%252Frails%2520db%253Amigrate"
style="width: 875px; height: 173px; border:0; transform: scale(1); overflow:hidden;"
sandbox="allow-scripts allow-same-origin">
</iframe>

<br>

You will see a new migration file added as below

<br>

<iframe
src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=ruby&width=675&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=24px&ph=21px&ln=false&fl=1&fm=Hack&fs=14px&lh=181%25&si=false&es=1x&wm=false&code=class%2520CreateFlipperTables%2520%253C%2520ActiveRecord%253A%253AMigration%255B6.1%255D%250A%2520%2520%2520def%2520self.up%250A%2520%2520%2520%2520%2520create_table%2520%253Aflipper_features%2520do%2520%257Ct%257C%250A%2520%2520%2520%2520%2520%2520%2520t.string%2520%253Akey%252C%2520null%253A%2520false%250A%2520%2520%2520%2520%2520%2520%2520t.timestamps%2520null%253A%2520false%250A%2520%2520%2520%2520%2520end%250A%250A%2520%2520%2520%2520%2520add_index%2520%253Aflipper_features%252C%2520%253Akey%252C%2520unique%253A%2520true%250A%250A%2520%2520%2520%2520%2520create_table%2520%253Aflipper_gates%2520do%2520%257Ct%257C%250A%2520%2520%2520%2520%2520%2520%2520t.string%2520%253Afeature_key%252C%2520null%253A%2520false%250A%2520%2520%2520%2520%2520%2520%2520t.string%2520%253Akey%252C%2520null%253A%2520false%250A%2520%2520%2520%2520%2520%2520%2520t.string%2520%253Avalue%250A%2520%2520%2520%2520%2520%2520%2520t.timestamps%2520null%253A%2520false%250A%2520%2520%2520%2520%2520end%250A%250A%2520%2520%2520%2520%2520add_index%2520%253Aflipper_gates%252C%2520%255B%253Afeature_key%252C%2520%253Akey%252C%2520%253Avalue%255D%252C%2520unique%253A%2520true%250A%2520%2520%2520end%250A%250A%2520%2520%2520def%2520self.down%250A%2520%2520%2520%2520%2520drop_table%2520%253Aflipper_gates%250A%2520%2520%2520%2520%2520drop_table%2520%253Aflipper_features%250A%2520%2520%2520end%250A%2520end"
style="width: 875px; height: 755px; border:0; transform: scale(1); overflow:hidden;"
sandbox="allow-scripts allow-same-origin">
</iframe>

<br>

**3.. Add the below to routes.rb file to make the endpoint `/flipper` available to admin and
   configure the username and password**

<br>

<iframe
src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=ruby&width=675&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=24px&ph=21px&ln=false&fl=1&fm=Hack&fs=14px&lh=181%25&si=false&es=1x&wm=false&code=flipper_app%2520%253D%2520Flipper%253A%253AUI.app%28Flipper.instance%29%2520do%2520%257Cbuilder%257C%250A%2520%2520builder.use%2520Rack%253A%253AAuth%253A%253ABasic%2520do%2520%257Cusername%252C%2520password%257C%250A%2520%2520%2520%2520%2520ActiveSupport%253A%253ASecurityUtils.secure_compare%28%250A%2520%2520%2520%2520%2520%2520%2520Digest%253A%253ASHA256.hexdigest%28username%29%252C%250A%2520%2520%2520%2520%2520%2520%2520Digest%253A%253ASHA256.hexdigest%28ENV%255B%27ADMIN_USERNAME%27%255D%250A%2520%2520%2520%2520%2520%29%29%2520%2526%2526%250A%2520%2520%2520%2520%2520ActiveSupport%253A%253ASecurityUtils.secure_compare%28%250A%2520%2520%2520%2520%2520%2520%2520Digest%253A%253ASHA256.hexdigest%28password%29%252C%250A%2520%2520%2520%2520%2520%2520%2520Digest%253A%253ASHA256.hexdigest%28ENV%255B%27ADMIN_PASSWORD%27%255D%250A%2520%2520%2520%2520%2520%29%29%250A%2520%2520%2520end%250A%2520end%250A%250A%2520Rails.application.routes.draw%2520do%250A%2520%2520%2520mount%2520flipper_app%2520%253D%253E%2520%27%252Fflipper%27"
style="width: 875px; height: 502px; border:0; transform: scale(1); overflow:hidden;"
sandbox="allow-scripts allow-same-origin">
</iframe>

<br>

**4.. And now use flipper in your code**

<br>

<iframe
src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=ruby&width=675&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=24px&ph=21px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=1x&wm=false&code=if%2520Flipper.enabled%253F%28%253Apay_intern%29%250A%2520%2520%2523%2520get%2520paid%250Aelse%250A%2520%2520%2523%2520wish%2520you%2520were%2520getting%2520paid%250Aend"
style="width: 875px; height: 215px; border:0; transform: scale(1); overflow:hidden;"
sandbox="allow-scripts allow-same-origin">
</iframe>

<br>

_Note_:

<br>

1.. By default all feature flags are disabled.

2.. To enable and disable use `Flipper.enable(:key)` and `Flipper.disable(:key)`

3.. And to check if enabled use `Flipper.enabled?(:key)`

<br>

Below are a few screenshots how your features look and can be toggled on the Flipper UI

![Flipper Dashboard](./flipper_dashboard.png)

![Flipper Features](./flipper_feature.png)
