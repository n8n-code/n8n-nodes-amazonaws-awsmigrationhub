import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Associate Created Artifact",
					"value": "Associate Created Artifact",
					"action": "Associate Created Artifact",
					"description": "<p>Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits:</p> <ul> <li> <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to indicate which AWS artifact is associated with a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.</p> </li> </ul>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact"
						}
					}
				},
				{
					"name": "Associate Discovered Resource",
					"value": "Associate Discovered Resource",
					"action": "Associate Discovered Resource",
					"description": "Associates a discovered resource ID from Application Discovery Service with a migration task.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource"
						}
					}
				},
				{
					"name": "Create Progress Update Stream",
					"value": "Create Progress Update Stream",
					"action": "Create Progress Update Stream",
					"description": "Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream"
						}
					}
				},
				{
					"name": "Delete Progress Update Stream",
					"value": "Delete Progress Update Stream",
					"action": "Delete Progress Update Stream",
					"description": "<p>Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:</p> <ul> <li> <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the stream name (same as a <code>CreateProgressUpdateStream</code> call).</p> </li> <li> <p>The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).</p> </li> <li> <p>If the stream takes time to be deleted, it might still show up on a <code>ListProgressUpdateStreams</code> call.</p> </li> <li> <p> <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>, <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs related to the tasks belonging to the stream will throw \"InvalidInputException\" if the stream of the same name is in the process of being deleted.</p> </li> <li> <p>Once the stream and all of its resources are deleted, <code>CreateProgressUpdateStream</code> for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).</p> </li> </ul>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream"
						}
					}
				},
				{
					"name": "Describe Application State",
					"value": "Describe Application State",
					"action": "Describe Application State",
					"description": "Gets the migration status of an application.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSMigrationHub.DescribeApplicationState"
						}
					}
				},
				{
					"name": "Describe Migration Task",
					"value": "Describe Migration Task",
					"action": "Describe Migration Task",
					"description": "Retrieves a list of all attributes associated with a specific migration task.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask"
						}
					}
				},
				{
					"name": "Disassociate Created Artifact",
					"value": "Disassociate Created Artifact",
					"action": "Disassociate Created Artifact",
					"description": "<p>Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:</p> <ul> <li> <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation to disassociate a created AWS Artifact from a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.</p> </li> </ul>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact"
						}
					}
				},
				{
					"name": "Disassociate Discovered Resource",
					"value": "Disassociate Discovered Resource",
					"action": "Disassociate Discovered Resource",
					"description": "Disassociate an Application Discovery Service discovered resource from a migration task.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource"
						}
					}
				},
				{
					"name": "Import Migration Task",
					"value": "Import Migration Task",
					"action": "Import Migration Task",
					"description": "<p>Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool.</p> <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as the migration tool must first register the migration task with Migration Hub.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSMigrationHub.ImportMigrationTask"
						}
					}
				},
				{
					"name": "List Application States",
					"value": "List Application States",
					"action": "List Application States",
					"description": "Lists all the migration statuses for your applications. If you use the optional <code>ApplicationIds</code> parameter, only the migration statuses for those applications will be returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSMigrationHub.ListApplicationStates"
						}
					}
				},
				{
					"name": "List Created Artifacts",
					"value": "List Created Artifacts",
					"action": "List Created Artifacts",
					"description": "<p>Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:</p> <ul> <li> <p>Gets the list of the created artifacts while migration is taking place.</p> </li> <li> <p>Shows the artifacts created by the migration tool that was associated by the <code>AssociateCreatedArtifact</code> API. </p> </li> <li> <p>Lists created artifacts in a paginated interface. </p> </li> </ul>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts"
						}
					}
				},
				{
					"name": "List Discovered Resources",
					"value": "List Discovered Resources",
					"action": "List Discovered Resources",
					"description": "Lists discovered resources associated with the given <code>MigrationTask</code>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources"
						}
					}
				},
				{
					"name": "List Migration Tasks",
					"value": "List Migration Tasks",
					"action": "List Migration Tasks",
					"description": "<p>Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits:</p> <ul> <li> <p>Can show a summary list of the most recent migration tasks.</p> </li> <li> <p>Can show a summary list of migration tasks associated with a given discovered resource.</p> </li> <li> <p>Lists migration tasks in a paginated interface.</p> </li> </ul>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSMigrationHub.ListMigrationTasks"
						}
					}
				},
				{
					"name": "List Progress Update Streams",
					"value": "List Progress Update Streams",
					"action": "List Progress Update Streams",
					"description": "Lists progress update streams associated with the user account making this call.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams"
						}
					}
				},
				{
					"name": "Notify Application State",
					"value": "Notify Application State",
					"action": "Notify Application State",
					"description": "Sets the migration state of an application. For a given application identified by the value passed to <code>ApplicationId</code>, its status is set or updated by passing one of three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS | COMPLETED</code>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSMigrationHub.NotifyApplicationState"
						}
					}
				},
				{
					"name": "Notify Migration Task State",
					"value": "Notify Migration Task State",
					"action": "Notify Migration Task State",
					"description": "<p>Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:</p> <ul> <li> <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share the latest progress and status.</p> </li> <li> <p> <code>MigrationTaskName</code> is used for addressing updates to the correct target.</p> </li> <li> <p> <code>ProgressUpdateStream</code> is used for access control and to provide a namespace for each migration tool.</p> </li> </ul>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState"
						}
					}
				},
				{
					"name": "Put Resource Attributes",
					"value": "Put Resource Attributes",
					"action": "Put Resource Attributes",
					"description": "<p>Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service repository. This association occurs asynchronously after <code>PutResourceAttributes</code> returns.</p> <important> <ul> <li> <p>Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to <i>add</i> an IP address, it will then be required to call it with <i>both</i> the IP and MAC addresses to prevent overriding the MAC address.</p> </li> <li> <p>Note the instructions regarding the special use case of the <a href=\"https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList\"> <code>ResourceAttributeList</code> </a> parameter when specifying any \"VM\" related value.</p> </li> </ul> </important> <note> <p>Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call <code>ListDiscoveredResources</code>.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSMigrationHub.PutResourceAttributes"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Created Artifact"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSMigrationHub.AssociateCreatedArtifact",
			"type": "options",
			"options": [
				{
					"name": "AWS Migration Hub Associate Created Artifact",
					"value": "AWSMigrationHub.AssociateCreatedArtifact"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Created Artifact"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Progress Update Stream",
			"name": "ProgressUpdateStream",
			"type": "string",
			"default": "",
			"description": "The name of the ProgressUpdateStream. ",
			"routing": {
				"send": {
					"property": "ProgressUpdateStream",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Created Artifact"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Migration Task Name",
			"name": "MigrationTaskName",
			"type": "string",
			"default": "",
			"description": "Unique identifier that references the migration task. <i>Do not store personal data in this field.</i> ",
			"routing": {
				"send": {
					"property": "MigrationTaskName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Created Artifact"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Created Artifact",
			"name": "CreatedArtifact",
			"type": "json",
			"default": "{\n  \"Description\": {}\n}",
			"description": "An ARN of the AWS resource related to the migration (e.g., AMI, EC2 instance, RDS instance, etc.) ",
			"routing": {
				"send": {
					"property": "CreatedArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Created Artifact"
					]
				}
			}
		},
		{
			"displayName": "Dry Run",
			"name": "DryRun",
			"type": "boolean",
			"default": true,
			"description": "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.",
			"routing": {
				"send": {
					"property": "DryRun",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Created Artifact"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Created Artifact"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Discovered Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSMigrationHub.AssociateDiscoveredResource",
			"type": "options",
			"options": [
				{
					"name": "AWS Migration Hub Associate Discovered Resource",
					"value": "AWSMigrationHub.AssociateDiscoveredResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Discovered Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Progress Update Stream",
			"name": "ProgressUpdateStream",
			"type": "string",
			"default": "",
			"description": "The name of the ProgressUpdateStream.",
			"routing": {
				"send": {
					"property": "ProgressUpdateStream",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Discovered Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Migration Task Name",
			"name": "MigrationTaskName",
			"type": "string",
			"default": "",
			"description": "The identifier given to the MigrationTask. <i>Do not store personal data in this field.</i> ",
			"routing": {
				"send": {
					"property": "MigrationTaskName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Discovered Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Discovered Resource",
			"name": "DiscoveredResource",
			"type": "json",
			"default": "{\n  \"Description\": {}\n}",
			"description": "Object representing a Resource.",
			"routing": {
				"send": {
					"property": "DiscoveredResource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Discovered Resource"
					]
				}
			}
		},
		{
			"displayName": "Dry Run",
			"name": "DryRun",
			"type": "boolean",
			"default": true,
			"description": "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.",
			"routing": {
				"send": {
					"property": "DryRun",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Discovered Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Discovered Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Progress Update Stream"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSMigrationHub.CreateProgressUpdateStream",
			"type": "options",
			"options": [
				{
					"name": "AWS Migration Hub Create Progress Update Stream",
					"value": "AWSMigrationHub.CreateProgressUpdateStream"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Progress Update Stream"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Progress Update Stream Name",
			"name": "ProgressUpdateStreamName",
			"type": "string",
			"default": "",
			"description": "The name of the ProgressUpdateStream. <i>Do not store personal data in this field.</i> ",
			"routing": {
				"send": {
					"property": "ProgressUpdateStreamName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Progress Update Stream"
					]
				}
			}
		},
		{
			"displayName": "Dry Run",
			"name": "DryRun",
			"type": "boolean",
			"default": true,
			"description": "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.",
			"routing": {
				"send": {
					"property": "DryRun",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Progress Update Stream"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Progress Update Stream"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Progress Update Stream"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSMigrationHub.DeleteProgressUpdateStream",
			"type": "options",
			"options": [
				{
					"name": "AWS Migration Hub Delete Progress Update Stream",
					"value": "AWSMigrationHub.DeleteProgressUpdateStream"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Progress Update Stream"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Progress Update Stream Name",
			"name": "ProgressUpdateStreamName",
			"type": "string",
			"default": "",
			"description": "The name of the ProgressUpdateStream. <i>Do not store personal data in this field.</i> ",
			"routing": {
				"send": {
					"property": "ProgressUpdateStreamName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Progress Update Stream"
					]
				}
			}
		},
		{
			"displayName": "Dry Run",
			"name": "DryRun",
			"type": "boolean",
			"default": true,
			"description": "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.",
			"routing": {
				"send": {
					"property": "DryRun",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Progress Update Stream"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Progress Update Stream"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSMigrationHub.DescribeApplicationState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Application State"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSMigrationHub.DescribeApplicationState",
			"type": "options",
			"options": [
				{
					"name": "AWS Migration Hub Describe Application State",
					"value": "AWSMigrationHub.DescribeApplicationState"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Application State"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Application Id",
			"name": "ApplicationId",
			"type": "string",
			"default": "",
			"description": "The configurationId in Application Discovery Service that uniquely identifies the grouped application.",
			"routing": {
				"send": {
					"property": "ApplicationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Application State"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Application State"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Migration Task"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSMigrationHub.DescribeMigrationTask",
			"type": "options",
			"options": [
				{
					"name": "AWS Migration Hub Describe Migration Task",
					"value": "AWSMigrationHub.DescribeMigrationTask"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Migration Task"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Progress Update Stream",
			"name": "ProgressUpdateStream",
			"type": "string",
			"default": "",
			"description": "The name of the ProgressUpdateStream. ",
			"routing": {
				"send": {
					"property": "ProgressUpdateStream",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Migration Task"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Migration Task Name",
			"name": "MigrationTaskName",
			"type": "string",
			"default": "",
			"description": "The identifier given to the MigrationTask. <i>Do not store personal data in this field.</i> ",
			"routing": {
				"send": {
					"property": "MigrationTaskName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Migration Task"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Migration Task"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Created Artifact"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSMigrationHub.DisassociateCreatedArtifact",
			"type": "options",
			"options": [
				{
					"name": "AWS Migration Hub Disassociate Created Artifact",
					"value": "AWSMigrationHub.DisassociateCreatedArtifact"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Created Artifact"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Progress Update Stream",
			"name": "ProgressUpdateStream",
			"type": "string",
			"default": "",
			"description": "The name of the ProgressUpdateStream. ",
			"routing": {
				"send": {
					"property": "ProgressUpdateStream",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Created Artifact"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Migration Task Name",
			"name": "MigrationTaskName",
			"type": "string",
			"default": "",
			"description": "Unique identifier that references the migration task to be disassociated with the artifact. <i>Do not store personal data in this field.</i> ",
			"routing": {
				"send": {
					"property": "MigrationTaskName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Created Artifact"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Created Artifact Name",
			"name": "CreatedArtifactName",
			"type": "string",
			"default": "",
			"description": "An ARN of the AWS resource related to the migration (e.g., AMI, EC2 instance, RDS instance, etc.)",
			"routing": {
				"send": {
					"property": "CreatedArtifactName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Created Artifact"
					]
				}
			}
		},
		{
			"displayName": "Dry Run",
			"name": "DryRun",
			"type": "boolean",
			"default": true,
			"description": "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.",
			"routing": {
				"send": {
					"property": "DryRun",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Created Artifact"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Created Artifact"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Discovered Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSMigrationHub.DisassociateDiscoveredResource",
			"type": "options",
			"options": [
				{
					"name": "AWS Migration Hub Disassociate Discovered Resource",
					"value": "AWSMigrationHub.DisassociateDiscoveredResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Discovered Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Progress Update Stream",
			"name": "ProgressUpdateStream",
			"type": "string",
			"default": "",
			"description": "The name of the ProgressUpdateStream.",
			"routing": {
				"send": {
					"property": "ProgressUpdateStream",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Discovered Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Migration Task Name",
			"name": "MigrationTaskName",
			"type": "string",
			"default": "",
			"description": "The identifier given to the MigrationTask. <i>Do not store personal data in this field.</i> ",
			"routing": {
				"send": {
					"property": "MigrationTaskName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Discovered Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Configuration Id",
			"name": "ConfigurationId",
			"type": "string",
			"default": "",
			"description": "ConfigurationId of the Application Discovery Service resource to be disassociated.",
			"routing": {
				"send": {
					"property": "ConfigurationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Discovered Resource"
					]
				}
			}
		},
		{
			"displayName": "Dry Run",
			"name": "DryRun",
			"type": "boolean",
			"default": true,
			"description": "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.",
			"routing": {
				"send": {
					"property": "DryRun",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Discovered Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Discovered Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSMigrationHub.ImportMigrationTask",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Migration Task"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSMigrationHub.ImportMigrationTask",
			"type": "options",
			"options": [
				{
					"name": "AWS Migration Hub Import Migration Task",
					"value": "AWSMigrationHub.ImportMigrationTask"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Migration Task"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Progress Update Stream",
			"name": "ProgressUpdateStream",
			"type": "string",
			"default": "",
			"description": "The name of the ProgressUpdateStream. &gt;",
			"routing": {
				"send": {
					"property": "ProgressUpdateStream",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Migration Task"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Migration Task Name",
			"name": "MigrationTaskName",
			"type": "string",
			"default": "",
			"description": "Unique identifier that references the migration task. <i>Do not store personal data in this field.</i> ",
			"routing": {
				"send": {
					"property": "MigrationTaskName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Migration Task"
					]
				}
			}
		},
		{
			"displayName": "Dry Run",
			"name": "DryRun",
			"type": "boolean",
			"default": true,
			"description": "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.",
			"routing": {
				"send": {
					"property": "DryRun",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Migration Task"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Import Migration Task"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSMigrationHub.ListApplicationStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Application States"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Application States"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Application States"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSMigrationHub.ListApplicationStates",
			"type": "options",
			"options": [
				{
					"name": "AWS Migration Hub List Application States",
					"value": "AWSMigrationHub.ListApplicationStates"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Application States"
					]
				}
			}
		},
		{
			"displayName": "Application Ids",
			"name": "ApplicationIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The configurationIds from the Application Discovery Service that uniquely identifies your applications.",
			"routing": {
				"send": {
					"property": "ApplicationIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Application States"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "If a <code>NextToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>NextToken</code>.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Application States"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "Maximum number of results to be returned per page.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Application States"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Application States"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Created Artifacts"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Created Artifacts"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Created Artifacts"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSMigrationHub.ListCreatedArtifacts",
			"type": "options",
			"options": [
				{
					"name": "AWS Migration Hub List Created Artifacts",
					"value": "AWSMigrationHub.ListCreatedArtifacts"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Created Artifacts"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Progress Update Stream",
			"name": "ProgressUpdateStream",
			"type": "string",
			"default": "",
			"description": "The name of the ProgressUpdateStream. ",
			"routing": {
				"send": {
					"property": "ProgressUpdateStream",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Created Artifacts"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Migration Task Name",
			"name": "MigrationTaskName",
			"type": "string",
			"default": "",
			"description": "Unique identifier that references the migration task. <i>Do not store personal data in this field.</i> ",
			"routing": {
				"send": {
					"property": "MigrationTaskName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Created Artifacts"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "If a <code>NextToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>NextToken</code>.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Created Artifacts"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "Maximum number of results to be returned per page.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Created Artifacts"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Created Artifacts"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Discovered Resources"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Discovered Resources"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Discovered Resources"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSMigrationHub.ListDiscoveredResources",
			"type": "options",
			"options": [
				{
					"name": "AWS Migration Hub List Discovered Resources",
					"value": "AWSMigrationHub.ListDiscoveredResources"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Discovered Resources"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Progress Update Stream",
			"name": "ProgressUpdateStream",
			"type": "string",
			"default": "",
			"description": "The name of the ProgressUpdateStream.",
			"routing": {
				"send": {
					"property": "ProgressUpdateStream",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Discovered Resources"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Migration Task Name",
			"name": "MigrationTaskName",
			"type": "string",
			"default": "",
			"description": "The name of the MigrationTask. <i>Do not store personal data in this field.</i> ",
			"routing": {
				"send": {
					"property": "MigrationTaskName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Discovered Resources"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "If a <code>NextToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>NextToken</code>.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Discovered Resources"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of results returned per page.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Discovered Resources"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Discovered Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSMigrationHub.ListMigrationTasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Migration Tasks"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Migration Tasks"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Migration Tasks"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSMigrationHub.ListMigrationTasks",
			"type": "options",
			"options": [
				{
					"name": "AWS Migration Hub List Migration Tasks",
					"value": "AWSMigrationHub.ListMigrationTasks"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Migration Tasks"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "If a <code>NextToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>NextToken</code>.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Migration Tasks"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "Value to specify how many results are returned per page.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Migration Tasks"
					]
				}
			}
		},
		{
			"displayName": "Resource Name",
			"name": "ResourceName",
			"type": "string",
			"default": "",
			"description": "Filter migration tasks by discovered resource name.",
			"routing": {
				"send": {
					"property": "ResourceName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Migration Tasks"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Migration Tasks"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Progress Update Streams"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Progress Update Streams"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Progress Update Streams"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSMigrationHub.ListProgressUpdateStreams",
			"type": "options",
			"options": [
				{
					"name": "AWS Migration Hub List Progress Update Streams",
					"value": "AWSMigrationHub.ListProgressUpdateStreams"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Progress Update Streams"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "If a <code>NextToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>NextToken</code>.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Progress Update Streams"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "Filter to limit the maximum number of results to list per page.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Progress Update Streams"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Progress Update Streams"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSMigrationHub.NotifyApplicationState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Notify Application State"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSMigrationHub.NotifyApplicationState",
			"type": "options",
			"options": [
				{
					"name": "AWS Migration Hub Notify Application State",
					"value": "AWSMigrationHub.NotifyApplicationState"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Notify Application State"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Application Id",
			"name": "ApplicationId",
			"type": "string",
			"default": "",
			"description": "The configurationId in Application Discovery Service that uniquely identifies the grouped application.",
			"routing": {
				"send": {
					"property": "ApplicationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Notify Application State"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Status",
			"name": "Status",
			"type": "options",
			"default": "NOT_STARTED",
			"description": "Status of the application - Not Started, In-Progress, Complete.",
			"options": [
				{
					"name": "NOT STARTED",
					"value": "NOT_STARTED"
				},
				{
					"name": "IN PROGRESS",
					"value": "IN_PROGRESS"
				},
				{
					"name": "COMPLETED",
					"value": "COMPLETED"
				}
			],
			"routing": {
				"send": {
					"property": "Status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Notify Application State"
					]
				}
			}
		},
		{
			"displayName": "Update Date Time",
			"name": "UpdateDateTime",
			"type": "string",
			"default": "",
			"description": "The timestamp when the application state changed.",
			"routing": {
				"send": {
					"property": "UpdateDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Notify Application State"
					]
				}
			}
		},
		{
			"displayName": "Dry Run",
			"name": "DryRun",
			"type": "boolean",
			"default": true,
			"description": "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.",
			"routing": {
				"send": {
					"property": "DryRun",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Notify Application State"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Notify Application State"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Notify Migration Task State"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSMigrationHub.NotifyMigrationTaskState",
			"type": "options",
			"options": [
				{
					"name": "AWS Migration Hub Notify Migration Task State",
					"value": "AWSMigrationHub.NotifyMigrationTaskState"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Notify Migration Task State"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Progress Update Stream",
			"name": "ProgressUpdateStream",
			"type": "string",
			"default": "",
			"description": "The name of the ProgressUpdateStream. ",
			"routing": {
				"send": {
					"property": "ProgressUpdateStream",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Notify Migration Task State"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Migration Task Name",
			"name": "MigrationTaskName",
			"type": "string",
			"default": "",
			"description": "Unique identifier that references the migration task. <i>Do not store personal data in this field.</i> ",
			"routing": {
				"send": {
					"property": "MigrationTaskName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Notify Migration Task State"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Task",
			"name": "Task",
			"type": "json",
			"default": "{\n  \"StatusDetail\": {},\n  \"ProgressPercent\": {}\n}",
			"description": "Information about the task's progress and status.",
			"routing": {
				"send": {
					"property": "Task",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Notify Migration Task State"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Update Date Time",
			"name": "UpdateDateTime",
			"type": "string",
			"default": "",
			"description": "The timestamp when the task was gathered.",
			"routing": {
				"send": {
					"property": "UpdateDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Notify Migration Task State"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Next Update Seconds",
			"name": "NextUpdateSeconds",
			"type": "number",
			"default": 0,
			"description": "Number of seconds after the UpdateDateTime within which the Migration Hub can expect an update. If Migration Hub does not receive an update within the specified interval, then the migration task will be considered stale.",
			"routing": {
				"send": {
					"property": "NextUpdateSeconds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Notify Migration Task State"
					]
				}
			}
		},
		{
			"displayName": "Dry Run",
			"name": "DryRun",
			"type": "boolean",
			"default": true,
			"description": "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.",
			"routing": {
				"send": {
					"property": "DryRun",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Notify Migration Task State"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Notify Migration Task State"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSMigrationHub.PutResourceAttributes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Attributes"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSMigrationHub.PutResourceAttributes",
			"type": "options",
			"options": [
				{
					"name": "AWS Migration Hub Put Resource Attributes",
					"value": "AWSMigrationHub.PutResourceAttributes"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Attributes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Progress Update Stream",
			"name": "ProgressUpdateStream",
			"type": "string",
			"default": "",
			"description": "The name of the ProgressUpdateStream. ",
			"routing": {
				"send": {
					"property": "ProgressUpdateStream",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Attributes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Migration Task Name",
			"name": "MigrationTaskName",
			"type": "string",
			"default": "",
			"description": "Unique identifier that references the migration task. <i>Do not store personal data in this field.</i> ",
			"routing": {
				"send": {
					"property": "MigrationTaskName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Attributes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Attribute List",
			"name": "ResourceAttributeList",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "<p>Information about the resource that is being migrated. This data will be used to map the task to a resource in the Application Discovery Service repository.</p> <note> <p>Takes the object array of <code>ResourceAttribute</code> where the <code>Type</code> field is reserved for the following values: <code>IPV4_ADDRESS | IPV6_ADDRESS | MAC_ADDRESS | FQDN | VM_MANAGER_ID | VM_MANAGED_OBJECT_REFERENCE | VM_NAME | VM_PATH | BIOS_ID | MOTHERBOARD_SERIAL_NUMBER</code> where the identifying value can be a string up to 256 characters.</p> </note> <important> <ul> <li> <p>If any \"VM\" related value is set for a <code>ResourceAttribute</code> object, it is required that <code>VM_MANAGER_ID</code>, as a minimum, is always set. If <code>VM_MANAGER_ID</code> is not set, then all \"VM\" fields will be discarded and \"VM\" fields will not be used for matching the migration task to a server in Application Discovery Service repository. See the <a href=\"https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#API_PutResourceAttributes_Examples\">Example</a> section below for a use case of specifying \"VM\" related values.</p> </li> <li> <p> If a server you are trying to match has multiple IP or MAC addresses, you should provide as many as you know in separate type/value pairs passed to the <code>ResourceAttributeList</code> parameter to maximize the chances of matching.</p> </li> </ul> </important>",
			"routing": {
				"send": {
					"property": "ResourceAttributeList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Attributes"
					]
				}
			}
		},
		{
			"displayName": "Dry Run",
			"name": "DryRun",
			"type": "boolean",
			"default": true,
			"description": "Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.",
			"routing": {
				"send": {
					"property": "DryRun",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Attributes"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Attributes"
					]
				}
			}
		},
];
