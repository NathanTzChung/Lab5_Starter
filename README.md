# Lab 5 - Starter
Name: Nathan Chung

Expose page: https://nathantzchung.github.io/Lab5_Starter/expose.html

Explore page: https://nathantzchung.github.io/Lab5_Starter/explore.html


### Check your understanding
1) I would not use a unit test to test the "message" feature of a messaging application. This is because I would not be able to actually test how the feature would interact between to users. Specifically, there would be multiple parts to this feature that would requrie multiple components to interact with each other on an application level (from sending to receiving and the things that occur inbetween) which is not test-able using unit tests. 
2) I would use a unit test to test the "max message length" feature of a messaging application. This is because the feature is individual and small scaled. Specifically, it isn't dependent on another app feature and can be tested individually. For example, since the feature restricts a user from typing more than 80 characters, I can create a unit test to directly test if an input of more than 80 characters goes through (which should fail the test).