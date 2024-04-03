# Define the GitHub repository URL and branch name
REPO_URL=origin
BRANCH_NAME="main"

# Push to github

publish() {
    # Prompt user for commit message
    read -p "Enter commit message: " COMMIT_MESSAGE

    # Add all changes to the staging area
    git add .

    # Commit changes with the provided message
    git commit -m "$COMMIT_MESSAGE"

    # Push changes to the specified branch on GitHub
    git push $REPO_URL $BRANCH_NAME
}
