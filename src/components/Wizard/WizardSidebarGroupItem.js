import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ListGroupItem } from '../ListGroup';

/**
 * WizardSidebarGroupItem component for Patternfly React
 */
const WizardSidebarGroupItem = ({
  stepIndex,
  subStepIndex,
  className,
  subStep,
  label,
  title,
  activeSubStep,
  onClick,
  ...rest
}) => {
  const classes = cx({ active: subStep === activeSubStep }, className);
  return (
    <ListGroupItem className={classes} listItem {...rest}>
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          onClick(stepIndex, subStepIndex);
        }}
      >
        <span className="wizard-pf-substep-number">{label}</span>
        <span className="wizard-pf-substep-title">{title}</span>
      </a>
    </ListGroupItem>
  );
};
WizardSidebarGroupItem.propTypes = {
  /** The wizard parent step index */
  stepIndex: PropTypes.number,
  /** The wizard sub step index */
  subStepIndex: PropTypes.number,
  /** Additional css classes */
  className: PropTypes.string,
  /** This wizard sub step name */
  subStep: PropTypes.string,
  /** This wizard sub step label */
  label: PropTypes.string,
  /** This wizard sub step title */
  title: PropTypes.string,
  /** The currently active wizard substep */
  activeSubStep: PropTypes.string,
  /** Sidebar group item click handler */
  onClick: PropTypes.func
};
export default WizardSidebarGroupItem;
