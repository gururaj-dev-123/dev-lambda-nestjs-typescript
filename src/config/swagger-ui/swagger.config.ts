import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs'; 
import * as YAML from 'js-yaml';
export function setupSwagger (app) {
const options: any = new DocumentBuilder ()
. setTitle('My NestJS API')
. setDescription( 'The API description for my NestJS application' )
. setVersion ('1.0')
. build();
//create the swagger document for generating/setting up the swagger UI
const document: any = SwaggerModule. createDocument(app, options);
const yamlstring: any = YAML. dump (document, null)
SwaggerModule. setup ('/api-docs', app, document);
// write the swagger-spec to the root folder dynamically
fs. writeFileSync('./swagger-spec.yaml', yamlstring);
return document;
}