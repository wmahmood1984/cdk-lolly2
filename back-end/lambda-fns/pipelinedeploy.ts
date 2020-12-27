const boto3 = require('boto3')


// files_to_ignore = [ "readme.md" ]

// const codecommit_client = boto3.client('codecommit')
const codepipeline_client = boto3.client('codepipeline')

exports.handler = async (event: any)=> {
    // # Extract commits
    // old_commit_id = event["detail"]["oldCommitId"]
    // new_commit_id = event["detail"]["commitId"]
    // # Get commit differences
    // codecommit_response = codecommit_client.get_differences(
    //     repositoryName="codepipeline-customization-sandbox-repo",
    //     beforeCommitSpecifier=str(old_commit_id),
    //     afterCommitSpecifier=str(new_commit_id)
    // )
    // # Search commit differences for files to ignore
    // for difference in codecommit_response["differences"]:
    //     file_name = difference["afterBlob"]["path"].lower()
    //     # If non-ignored file is present, kickoff pipeline
    //     if file_name not in files_to_ignore:
    codepipeline_client.start_pipeline_execution({
                name: "GatsbyPipeline"
            })

    
            // # Break to avoid executing the pipeline twice
    //         break

}