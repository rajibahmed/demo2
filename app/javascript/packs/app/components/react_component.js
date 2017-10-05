import Ember from 'ember';
import React from 'react';
import ReactDOM from 'react-dom';
import Capture from './reacts/profile.jsx';

let { get } = Ember;

const ReactComponent = Ember.Component.extend({
  didRender: function() {
    ReactDOM.render( React.createElement(
      Capture, { name : 'Rajib'}, null
      ), get(this, 'element'));
  },

  willDestroyElement: function() {
    ReactDOM.unmountComponentptNode(get(this, 'element'));
  }
});

export default ReactComponent;
