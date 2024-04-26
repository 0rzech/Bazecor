/* Bazecor
 * Copyright (C) 2024  DygmaLab SE.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React, { useState } from "react";
import { NameModal } from "@Renderer/component/Modal";
import { IconPen } from "@Renderer/component/Icon";
import { motion } from "framer-motion";
import { i18n } from "@Renderer/i18n";
import { Button } from "@Renderer/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@Renderer/components/ui/dialog";
import { DevicePreview } from "../DevicePreview";

interface DeviceConnectedPreviewProps {
  deviceName?: string | boolean;
  deviceDisplayName?: string;
  nameChange: (data: string) => void;
}

const DeviceConnectedPreview = ({ deviceName, deviceDisplayName, nameChange }: DeviceConnectedPreviewProps) => {
  const [showModal, setShowModal] = useState(false);
  const handleSave = (data: string) => {
    setShowModal(false);
    nameChange(data);
  };
  return (
    <div className="flex flex-col gap-1 mb-2">
      <div className="relative">
        <div className="max-w-[204px] ml-[-24px] relative">
          <DevicePreview deviceName={deviceDisplayName} isConnected />
        </div>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 0.75, 1] }} // Pulsating animation effect
          transition={{ duration: 1, repeat: Infinity }}
          className="rounded-full absolute bg-purple-200 dark:bg-green-200 h-[8px] w-[8px] top-[-4px] right-[-4px]"
        >
          &nbsp;
        </motion.div>
      </div>

      {deviceName ? (
        <>
          <button onClick={() => setShowModal(true)} type="button" className="p-0 text-left">
            <h4 className="tracking-tight font-semibold text-2xl text-gray-700 dark:text-gray-25 ">
              {deviceName}{" "}
              <span className="inline-block mr-2 align-[2px]">
                <IconPen />
              </span>
            </h4>
          </button>
          <h5 className="tracking-tight font-semibold text-base text-gray-500 dark:text-gray-50">{deviceDisplayName}</h5>
        </>
      ) : (
        <button onClick={() => setShowModal(true)} type="button" className="p-0 text-left">
          <h4 className="tracking-tight font-semibold text-2xl text-gray-700 dark:text-gray-25">
            {deviceDisplayName}{" "}
            <span className="inline-block mr-2 align-[2px]">
              <IconPen />
            </span>
          </h4>
        </button>
      )}

      {/* <NameModal
        show={showModal}
        name={deviceName}
        toggleShow={() => setShowModal(false)}
        handleSave={(data: string) => handleSave(data)}
        modalTitle={i18n.keyboardSettings.neuronManager.changeLayerTitle}
        labelInput={i18n.keyboardSettings.neuronManager.inputLabel}
      /> */}

      <Dialog open={showModal} onOpenChange={() => setShowModal(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" size="md" onClick={() => setShowModal(false)}>
              Discard changes
            </Button>
            <Button variant="secondary" size="md" onClick={() => setShowModal(false)}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeviceConnectedPreview;
