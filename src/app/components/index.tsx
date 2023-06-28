import React from 'react'
import Nav from './nav'
import NavItem from './navItem'
import List from './list'
import ListItem from './listitem'

 export default function Projects({ repos}:{repos:any}) {
        return (
          <div className="w-4/5 max-w-3xl">
            <Nav>
              <NavItem href="/new" isActive>New Releases</NavItem>
              <NavItem  href="/top" isActive>Top Rated</NavItem>
              <NavItem  href="/picks" isActive>Vincent’s Picks</NavItem>
            </Nav>
            <List>
              {repos.map((repo:any) => (
                <ListItem key={repo.id} repo={repo} />
              ))}
            </List>
          </div>
        )
      }