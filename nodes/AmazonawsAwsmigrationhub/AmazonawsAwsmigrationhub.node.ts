import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class AmazonawsAwsmigrationhub implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'amazonaws-awsmigrationhub',
		name: 'N8nDevAmazonawsAwsmigrationhub',
		icon: { light: 'file:./amazonaws-awsmigrationhub.png', dark: 'file:./amazonaws-awsmigrationhub.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'AWS Migration Hub API methods help to obtain server and application migration status and integrate your resource-specific migration tool by providing a programmatic interface to Migration Hu..',
		defaults: { name: 'amazonaws-awsmigrationhub' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAmazonawsAwsmigrationhubApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
		],
	};
}
