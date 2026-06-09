import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class AmazonawsAwsmigrationhub implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Amazonaws Awsmigrationhub',
		name: 'N8nDevAmazonawsAwsmigrationhub',
		icon: { light: 'file:./amazonaws-awsmigrationhub.png', dark: 'file:./amazonaws-awsmigrationhub.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'AWS Migration Hub API provides programmatic access to migration status and tool integration.',
		defaults: { name: 'Amazonaws Awsmigrationhub' },
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
