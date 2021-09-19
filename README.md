# LifeOrganizatorApp
React native app for getting your important document and monthly payments in check.

## TODO:
* Documents:
  * store them offline for the time being
    * followup: ftp, synology drive, google drive, dropbox, ...?
    * optional: own server for docs? potentially big files, expensive storage when lot's of users.
  * what do you need to store documents?
    * I want to be able to add a start and an expiration date
    * I want to be able to add description
    * I want to be able to bundle documents together - aka make "projects" and have the documents with their own meta in it
      * When bundled together I want them to be in a common folder phyisicaly on the disk
    * Document archive:
      * never loose a document, when archived store in the archive subfolder
    * Document types - probably as a string text field:
      * Official, varranty, insurance, other...
    * Have a link for each document and each project too
      * Maybe cross referencing in the db with the payements so you can attach payments to documents
      * Which one is first, payment or document whne doing it?
    

Step 1.:
  * Make the UI for the documents too:
    * Overview screen:
      * Archive button --> same screen just with archived documents
      * Projects
      * No project documents in a "No project" project for easier programming
    * Project screen:
      * List of documents, sort by start/expiry date
      * Add document(s) button
      * Remove from project button
    * Document screen:
      * Display all the data as well as the download/open button for the doc
      * Edit/Delete button
      * Add to a project button, allow one project per document
    * Create/edit project screen:
      * Select documents not in project to add to the project
    * Create/edit document screen:
      * Upload and save any file (jpg, pdf, docx, ...)