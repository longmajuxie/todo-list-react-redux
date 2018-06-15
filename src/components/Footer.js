import React, { PureComponent } from 'react';
import { VisibilityFilters } from '../actions/actions';
/**
 * Footer is where we let the user change currently visible todos.
 */
class Footer extends PureComponent {
  render(){
    return(
      <p>
        Show:
        {' '}
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
          All
        </FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
          Active
        </FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </p>
    );
  }
}

export default Footer;
