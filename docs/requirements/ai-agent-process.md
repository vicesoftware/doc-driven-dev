# AI Agent Process Guide

This document outlines how AI agents should interact with and process requirements in this project. We use a Document-Driven Development approach (see http://docdd.ai) where requirements are stored and managed in the `docs/requirements/` folder.

## Directory Structure

- `docs/requirements/` - Contains all active requirements documents
- `docs/requirements/completed/` - Contains completed requirements that have been implemented

## Workflow for AI Agents

1. **Identify Current Requirements**
   - Review the `docs/requirements/` folder to identify active requirements
   - Examine requirement documents for tasks with status "Not Started" or "In Progress"
   - Do not work on tasks marked as "Completed"

2. **Understand the Process**
   - Each requirement document follows the same format:
     - Overview section describing the feature
     - Process section outlining the workflow
     - Tasks section with detailed implementation tasks
     - Feature status to track overall progress
     - Technical notes or considerations

3. **Task Selection and Implementation**
   - Follow the process outlined in each requirements document, typically:
     - Pick the next task that isn't in progress
     - Implement the task according to specifications
     - Request developer testing when complete
     - Update the task status in the requirements document once approved
     - Move to the next task

4. **Task Status Management**
   - Update task status in the requirements document:
     - "Not Started" → "In Progress" → "Completed"
     - Use the appropriate markers (✅, 🔄, ⏳, ❌) as defined in the document
   - Do not modify tasks marked as "Completed"

5. **Completed Requirements**
   - When all tasks in a requirements document are completed:
     - Update the "Feature Status" section to "Completed"
     - Move the document to the `docs/requirements/completed/` folder

## Example Process from Existing Requirements

When working on the Tasks in this feature implementation, follow these steps:
1. Pick the next task that isn't in progress
2. Implement the task
3. Ask the developer to test the feature
4. Once approved, commit the changes and close the task by updating its status in this document
5. Move on to the next task

## Status Key

- ✅ Completed: Task is finished and ready for review
- 🔄 In Progress: Task is currently being worked on
- ⏳ Not Started: Task hasn't been started yet
- ❌ Blocked: Task is blocked by dependencies or issues

## Best Practices

- Always reference task numbers and requirement documents when committing changes
- When encountering issues, create clear debugging documents (see `linkedin-auth-issues.md` as an example)
- Follow the established patterns and approaches in the project
- Reuse components and patterns wherever possible
- Keep the requirements document updated with the latest task statuses
- When a feature is completed, update its status and move to the completed folder