import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {MatTableDataSource} from '@angular/material/table';

import { GitService } from '../../shared/services/git.service';

/**
 * @name UserModel
 * @type interface
 * @description model for user object
 */
export interface UserModel {
    login: string;
    id: number;
    node_id: number;
    avatar_url: string;
    gravatar_id:string;
    url:string;
    html_url:string;
    followers_url:string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url :string;
    received_events_url:string;
    type:string;
    site_admin: boolean 
  }


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    animations: [routerTransition()]
})
export class UsersComponent implements OnInit {

    public users: UserModel[] = [];
    public displayedColumns: string[] = ['login', 'id', 'url', 'type']
    public dataSource;


    constructor(private gitService: GitService) {}

    ngOnInit() {
        this.getUsers();
    }

    /**
     * @name getUsers
     * @description subscribes getUsers function of gitService to fetch all users
     * @param null
     */
    getUsers(){
        this.gitService.getUsers().subscribe((res: any) => 
        {
            this.users = res;
            this.dataSource = new MatTableDataSource(this.users)
            
        }, err => {
            console.log(err);
        });
    }

    /**
     * @name applyFilter
     * @description search typed in value in the table
     * @param filterValue 
     */
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
}
