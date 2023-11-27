import * as React from 'react';
import styles from './DelphiTimeline.module.scss';
import { IDelphiTimelineProps } from './IDelphiTimelineProps';
import Timeline from './Timeline';
export default class DelphiTimeline extends React.Component<IDelphiTimelineProps, {}> {
  public render(): React.ReactElement<IDelphiTimelineProps> {
    const elementProps = {
      context: this.props.context,
      description: this.props.description,
      listName: this.props.listName,
      layout: this.props.layout,
      showImage: this.props.showImage,
      showDescription: this.props.showDescription,
      dateFormat: this.props.dateFormat,
      sortOrder: this.props.sortOrder
    }
    return (
      <section className={styles.delphiTimeline}>
        <Timeline context={elementProps.context} dateFormat={elementProps.dateFormat}
          description={elementProps.description} layout={elementProps.layout} listName={elementProps.listName}
          showDescription={elementProps.showDescription} showImage={elementProps.showImage}
          sortOrder={elementProps.sortOrder} />
      </section>
    );
  }
}
