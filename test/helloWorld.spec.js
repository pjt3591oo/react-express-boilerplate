/**
 * Created by bagjeongtae on 2017. 8. 4..
 */
import { expect } from 'chai';
import {List, Map} from 'immutable';

describe('hello world', () => {
    it('works!', () => {
        const state = Map({
          vote: Map({
            pair: List.of('Trainspotting', '28 Days Later'),
            tally: Map({
              'Trainspotting': 4,
              '28 Days Later': 2
            })
          }),
          entries: List()
        });

        expect(true).to.be.true;
    });
});