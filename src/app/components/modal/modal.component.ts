import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  isResponse: boolean = false;
  status_data = [];
  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.isResponse = false;
    setTimeout(() => {
      this.isResponse = true;
    }, 3000);

    this.status_data = [{
      "FirstCol": "Value1",
      "SecondCol": "Value2",
      "ThirdCol": "Value3",
      "Fourth": "Value4"
    },
    {
      "FirstCol": "Value5",
      "SecondCol": "Value6",
      "ThirdCol": "Value7",
      "Fourth": "Value8"
    }];
  }

  closeModal() {
    this.dialogRef.close();
  }

  download(val: string) {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.status_data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, val + '_' + this.data['fileName']);
  }

}
interface DialogData {
  type: string;
}
