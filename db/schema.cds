namespace kaztakata;

using {cuid, managed} from '@sap/cds/common';

entity TemplateRequests : cuid, managed {
  title               : String;
  description         : String;
  comment             : String;
}