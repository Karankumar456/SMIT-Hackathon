import React from 'react'
import NavbarTop from './navbar'
import LeftNavigation from './leftNavigation'


function AdminPortal() {
    return (
        <div>
            <NavbarTop />
                <div>
                    <LeftNavigation />
                </div>
        </div>
    )
}

export default AdminPortal