---
category: 'blog'
cover: './cover.jpg'
title: 'Facade Design Pattern'
description: 'A structural design pattern that serves as a simplified front-facing interface masking more complex underlying or structural code.'
date: '2020-11-18'
tags: ['Design Pattern']
published: true
---

**Problem**

Imagine a problem which needs solutioning, but for which multiple components have to be handled and made to work in coordination and in an intended sequence for maybe some of them.

In such cases there are 2 options - 

<pre>

    1.  The client interacts with all the components themselves
    2.  The client makes a simple request to a black box and just get the desired result

</pre>
**Solution**

A facade is a class that provides an easy to use interface which is linked to a complex subsystem. In the above point 2 is symbolic of a facade pattern.
<br>
<br>
<br>
![Facade](./facade_diagram.png)

Let us take an example of a restaurant to understand it better. Let us consider 2 models here - 

One, a self service restaurant where the user needs to go the billing counter, choose a dish and make the payment, and often has to find a table in such crowded places too. After that one goes to the respective counter depending on the cuisine one has bought a token for and waits till one's food is prepared. Once prepared, comes and enjoys their meal.

On the other hand, consider a fine dining where you just go and at the entrance itself you get assigned a waiter for you who help you find the right comfortable table, he/she takes your order and takes that order to the kitchen, to the respective counter where your meal will be prepared. Once prepared the waiter brings the food hot and fresh and serves it on your table. He even presents you with the cheque/bill at the end of your meal.

Just think, you were just sitting at tyhe table while the waiter did all the coordination required for the end result i.e serving you a fresh meal.

This is a pretty simple example of a facade pattern we observe on a daily basis.

<ul>
<li>dcdc</li>
</ul>