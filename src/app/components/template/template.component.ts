import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  accordion = [];
  isNext: boolean = false;
  isPrev: boolean = false;
  TREE_DATA: ChargeNode[] = [];
  showProgress: boolean = false;

  private transformer = (node: ChargeNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  constructor() {
    this.dataSource.data = this.TREE_DATA;
  }

  ngOnInit() {
    this.showProgress = false;
    this.accordion = [
      {
        'id': 1,
        'title': 'Fees',
        'checked': false,
        'attributes': [
          {
            'id': 101,
            'title': 'LocationCode',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 102,
            'title': 'ChargeCodeType',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 103,
            'title': 'AircraftRegistrationNo',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 104,
            'title': 'AircraftTypeCode_ICAO',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 105,
            'title': 'EmissionClass',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 106,
            'title': 'EngineType',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 107,
            'title': 'FlightDateTime',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 108,
            'title': 'FlightNo',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 109,
            'title': 'FlightZone',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 110,
            'title': 'LocationCode',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 111,
            'title': 'MaxTakeOffWeight',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 113,
            'title': 'PassengerCount',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 114,
            'title': 'ReferenceNo',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 115,
            'title': 'RouteDateTime',
            'mandatory': false,
            'checked': false
          }
        ]
      },
      {
        'id': 2,
        'checked': false,
        'title': 'Lighting',
        'attributes': [
          {
            'id': 201,
            'title': 'LocationCode',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 202,
            'title': 'AircraftRegistrationNo',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 203,
            'title': 'MaxTakeOffWeight',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 204,
            'title': 'NoiseClass',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 205,
            'title': 'FlightNo',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 206,
            'title': 'FlightDateTime',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 207,
            'title': 'FlightDirection',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 208,
            'title': 'LocationCode',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 209,
            'title': 'LocationCode_ICAO',
            'mandatory': false,
            'checked': false
          }
        ]
      },
      {
        'id': 3,
        'checked': false,
        'title': 'Parking',
        'attributes': [
          {
            'id': 301,
            'title': 'AircraftRegistrationNo',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 302,
            'title': 'AircraftTypeCode_ICAO',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 303,
            'title': 'FlightDateTime',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 304,
            'title': 'FlightNo',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 305,
            'title': 'LocationCode',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 306,
            'title': 'MaxTakeOffWeight',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 306,
            'title': 'OffStandDateTime',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 308,
            'title': 'OnStandDateTime',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 309,
            'title': 'StandNo',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 310,
            'title': 'StandType',
            'mandatory': false,
            'checked': false
          }
        ]
      },
      {
        'id': 4,
        'checked': false,
        'title': 'Security',
        'attributes': [
          {
            'id': 401,
            'title': 'AircraftRegistrationNo',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 402,
            'title': 'AircraftTypeCode_ICAO',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 403,
            'title': 'FlightDateTime',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 404,
            'title': 'FlightNo',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 405,
            'title': 'LocationCode',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 406,
            'title': 'LocationCode',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 407,
            'title': 'PassengerCount',
            'mandatory': true,
            'checked': true
          }
        ]
      },
      {
        'id': 5,
        'checked': false,
        'title': 'Passenger Services',
        'attributes': [
          {
            'id': 501,
            'title': 'AircraftRegistrationNo',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 502,
            'title': 'AircraftTypeCode_ICAO',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 503,
            'title': 'FlightDateTime',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 504,
            'title': 'FlightDirection',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 505,
            'title': 'FlightNo',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 506,
            'title': 'LocationCode',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 507,
            'title': 'LocationCode',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 508,
            'title': 'LocationCode_ICAO',
            'mandatory': true,
            'checked': true
          },
          {
            'id': 509,
            'title': 'MaxTakeOffWeight',
            'mandatory': false,
            'checked': true
          },
          {
            'id': 510,
            'title': 'PassengerCount',
            'mandatory': true,
            'checked': true
          }
        ]
      },
      {
        'id': 6,
        'checked': false,
        'title': 'PassID',
        'attributes': [
          {
            'id': 601,
            'title': 'StaffID',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 602,
            'title': 'StaffName',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 603,
            'title': 'PassNo',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 604,
            'title': 'PassIssueDate',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 605,
            'title': 'PassExpiryDate',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 606,
            'title': 'IssueDescription',
            'mandatory': false,
            'checked': false
          },
          {
            'id': 607,
            'title': 'MiscData',
            'mandatory': false,
            'checked': false
          }
        ]
      },
      {
        'id': 7,
        'checked': false,
        'title': 'Runway charges',
        'attributes': [{
          'id': 701,
          'title': 'AircraftRegistrationNo',
          'mandatory': true,
          'checked': true
        }, {
          'id': 702,
          'title': 'AircraftTypeCode_ICAO',
          'mandatory': true,
          'checked': true
        }, {
          'id': 703,
          'title': 'EngineType',
          'mandatory': false,
          'checked': false
        }, {
          'id': 704,
          'title': 'FlightDateTime',
          'mandatory': true,
          'checked': true
        }, {
          'id': 705,
          'title': 'FlightDirection',
          'mandatory': false,
          'checked': false
        }, {
          'id': 706,
          'title': 'FlightNo',
          'mandatory': true,
          'checked': true
        }, {
          'id': 707,
          'title': 'LocationCode',
          'mandatory': true,
          'checked': true
        }, {
          'id': 708,
          'title': 'LocationCode',
          'mandatory': true,
          'checked': true
        }, {
          'id': 709,
          'title': 'LocationCode_ICAO',
          'mandatory': true,
          'checked': true
        }, {
          'id': 710,
          'title': 'MaxTakeOffWeight',
          'mandatory': true,
          'checked': true
        }, {
          'id': 711,
          'title': 'NoiseClass',
          'mandatory': false,
          'checked': false
        }, {
          'id': 712,
          'title': 'TypeOfWeight',
          'mandatory': false,
          'checked': false
        }
        ]
      },
      {
        'id': 8,
        'checked': false,
        'title': 'Utilities',
        'attributes': [{
          'id': 801,
          'title': 'ChargeCodeType',
          'mandatory': true,
          'checked': true
        },
        {
          'id': 802,
          'title': 'LocationCode',
          'mandatory': true,
          'checked': true
        }]
      }
    ]
  }
  getSelectChargeType() {
    const data = this.accordion.filter((acc) => {
      return acc.checked;
    })
    return data;
  }

  getPreviewData() {
    this.TREE_DATA = [];
    const data = this.accordion.filter((acc) => {
      return acc.checked;
    });
    data.forEach(acc => {
      const checkedAttributes = acc.attributes.filter(attr => {
        return attr.checked
      });
      if (checkedAttributes.length) {
        let childArray: ChargeNode[] = [];
        checkedAttributes.forEach(at => {
          childArray.push({ name: at.title })
        });
        let ChargeNode = { name: acc.title, children: childArray };
        this.TREE_DATA.push(ChargeNode);
      }
    });
    console.log(this.TREE_DATA);
    this.dataSource.data = this.TREE_DATA;
  }
  submitTemplate() {
    this.showProgress = true;
    window.scrollTo(0, 0)
    setTimeout(() => {
      this.showProgress = false;
      Swal.fire(
        'Bingo!',
        'Your template created successfully!',
        'success'
      )
    }, 3000);
  }

}
interface ChargeNode {
  name: string;
  children?: ChargeNode[];
}
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

