import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneDropdown,
  PropertyPaneTextField,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'DelphiTimelineWebPartStrings';
import DelphiTimeline from './components/DelphiTimeline';
import { IDelphiTimelineProps } from './components/IDelphiTimelineProps';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls';
import TimelineService from '../../services/TimelineService';

export interface IDelphiTimelineWebPartProps {
  description: string;
  listName: string;
  layout: string;
  showImage: boolean;
  showDescription: boolean;
  dateFormat: string;
  sortOrder: string;
}

export default class DelphiTimelineWebPart extends BaseClientSideWebPart<IDelphiTimelineWebPartProps> {
  private TimelineService: TimelineService = null;
  public render(): void {
    const element: React.ReactElement<IDelphiTimelineProps> = React.createElement(
      DelphiTimeline,
      {
        context: this.context,
        description: this.properties.description,
        listName: this.properties.listName,
        layout: this.properties.layout,
        showImage: this.properties.showImage,
        showDescription: this.properties.showDescription,
        dateFormat: this.properties.dateFormat,
        sortOrder: this.properties.sortOrder
      }
    );

    ReactDom.render(element, this.domElement);
  }
  protected onInit(): Promise<void> {
    this.TimelineService = new TimelineService(this.context);
    this.TimelineService.InitTimeLineServie();
    return Promise.resolve();
  }


  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyFieldListPicker('listName', {
                  label: strings.ListNameFieldLabel,
                  selectedList: this.properties.listName,
                  includeHidden: false,
                  orderBy: PropertyFieldListPickerOrderBy.Title,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  context: this.context,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'listPickerFieldId',
                  baseTemplate: 100
                }),
                PropertyPaneDropdown('layout', {
                  label: strings.LayoutFieldLabel,
                  options: [
                    { key: 'Vertical', text: strings.VerticalLabel },
                    { key: 'Horizontal', text: strings.HorizontalLabel }
                  ]
                }),
                PropertyPaneToggle('showImage', {
                  label: strings.ShowImageFieldLabel,
                  checked: true
                }),
                PropertyPaneToggle('showDescription', {
                  label: strings.ShowDescriptionFieldLabel,
                  checked: true
                }),
                PropertyPaneTextField('dateFormat', {
                  label: strings.DateFormatFieldLabel,
                  value: strings.DateFormatText
                }),
                PropertyPaneDropdown('sortOrder', {
                  label: strings.SortOrderFieldLabel,
                  options: [
                    { key: 'asc', text: strings.AscendingLabel },
                    { key: 'desc', text: strings.DescendingLabel }
                  ]
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
