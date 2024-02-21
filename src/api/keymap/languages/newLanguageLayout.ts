/* bazecor-keymap -- Bazecor keymap library
 * Copyright (C) 2019  Keyboardio, Inc.
 * Copyright (C) 2019  DygmaLab SE
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 */

import { BaseKeycodeTableType, KeymapCodeTableType } from "../types";

function newLanguageLayout(baseKeyCodeTable: BaseKeycodeTableType[], language: string, newKeyCodeTable: any[]) {
  if (language === "en-US") {
    return baseKeyCodeTable;
  }

  return baseKeyCodeTable.map(group => {
    const newArray = group.keys.reduce((acc: KeymapCodeTableType[], key) => {
      const newKey = newKeyCodeTable.find(item => item.code === key.code);
      const isDeleteNewKey = newKey && newKey.newGroupName && newKey.newGroupName !== group.groupName;
      if (!isDeleteNewKey) {
        if (newKey) {
          acc.push(newKey);
        } else {
          acc.push(key);
        }
      }
      return acc;
    }, []);

    const arrayFromAnotherGroup = newKeyCodeTable.filter((keys: { newGroupName: any }) => keys.newGroupName === group.groupName);

    return {
      ...group,
      keys: [...newArray, ...arrayFromAnotherGroup],
    };
  });
}

export default newLanguageLayout;
