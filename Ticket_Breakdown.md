# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## 1. Update Database Design to Add column "custom_id" EFFORT-Low,TIME=2hrs, ACCEPTANCE CRITERIA = DB Design completed

# Task 1 : Add new column "agent_custom_id" as varchar(255) in "Agent" table.

# Task 2 : Update the Agent model object in the backend with new column "Agent".

## 2. Update the Middleware API and test it ; EFFORT-LOW ,TIME=2hrs, ACCEPTANCE CRITERIA = Backend completed

# Task 3 : Update the REST API functionalities (for ex: updateAgentFacilityID) to update in the backend.

# Task 4 : Update the test functionality to test the update happens in the backend.

# Task 5 : Use Postman to test the API functionality.

## 3. Frontend Change; EFFORT-Medium,TIME=3hrs, ACCEPTANCE CRITERIA = Frontend design completed

# Task 6 : Input field for faciitator to add the custom agent Id validate

# Task 7 : Validation for the input given form.

## 4. Method call getShiftsByFacility() && generateReport() ; EFFORT -LOW , TIME-1hr, ACCEPTANCE CRITERIA = Frontend validation completed

# Task 8 : Make sure method returns object with value "agent_facility_id" added in the report as well as getShiftsByfacility is called.

## 5. Authentication and Authorization for the Facilitator EFFORT -LOW , TIME-3hr, ACCEPTANCE CRITERIA = IAM completed

# Task 9 : Make sure facilitator can only give the agent's custom id and no one else by using authorization role in the frontend.

# Task 10 : Move the changes to Developement server and get QA sign off to get approval for production rollout.
