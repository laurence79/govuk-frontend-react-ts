/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { mount } from '@cypress/react';
import { Glow } from './Glow';

const content = (
  <>
    <a href="#">I am an anchor</a>
    <span>I&apos;m some text</span>
    <div>
      <button type="button">I&apos;m a button</button>
    </div>
  </>
);

describe('Glow Component', () => {
  describe('rendering', () => {
    it('renders', () => {
      mount(<Glow>{content}</Glow>);

      cy.get('[data-testid="Glow"]').should('exist');
    });
  });

  it('appears as expected', () => {
    mount(
      <>
        <Glow>{content}</Glow>
        <Glow on>{content}</Glow>
      </>
    );

    cy.percySnapshot();
  });
});
