import {FlatTreeControl} from '@angular/cdk/tree';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Unidad Registro Social',
    children: [{name: 'Hogares-URS'}, {name: 'Deficiencia Habitacional'}, {name: 'Condición de Pobreza'}],
  },
  {
    name: 'Instituto Nacional de Estadística y Censos (INEC)',
    children: [{name: 'Zonas Censales'}, {name: 'Sectores Censales'}, {name: 'Manzanas Censales'},{name: 'Localidades'}],
  },
  {
    name: 'División Político Administrativa',
    children: [{name: 'Provincia'}, {name: 'Cantón'}, {name: 'Parroquia'}],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'tree',
  templateUrl: 'tree.component.html',
  imports: [MatTreeModule, MatButtonModule, MatIconModule, MatCheckboxModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TreeComponent {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}