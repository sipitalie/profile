import React from 'react'
import List from './list'
import ListItem from './listitem'
import Link from 'next/link'

 export default function Projects({ repos}:{repos:any}) {
        return (
          <div className="md:w-4/5 max-w-3xl">
            <List>
              {repos.map((repo:any) => (
                <Link key={repo.id} href={repo.link}>
                <ListItem key={repo.id} repo={repo} />
                </Link>
              ))}
            </List>
          </div>
        )
      }