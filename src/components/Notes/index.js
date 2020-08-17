import React, { Component } from 'react'
import { GoChevronDown } from "react-icons/go";

export default class  extends Component {
    render() {
        return (
            <div>
               <nav>
               <li class="nav-item dropdown abcde">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <button className=" abcde">
                
                All Notes<GoChevronDown  />
              </button>
            </a>
            <div
              class="dropdown-menu singh"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
               </nav>
            </div>
        )
    }
}
