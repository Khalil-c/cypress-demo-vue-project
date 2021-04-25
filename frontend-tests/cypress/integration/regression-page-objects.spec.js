/// <reference types="cypress" />

import * as indexFunctions from '../pages/indexPage'
import * as dashboardFunctions from '../pages/dashboardPage'
import * as targets from '../targets/targets'


//test suite
describe('Test suite', function(){

    beforeEach(()=> {
        cy.visit(targets.base_url) 
        indexFunctions.checkTitleOfIndexPage(cy)
    })

    //Test case
    it('Perform login and logout', function(){
        indexFunctions.performValidLogin(cy, targets.username, targets.password,'Tester Hotel Overview' )
        dashboardFunctions.performLogout(cy, 'Login')
    })
    
})