'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog';

interface IModalProps {
  open: boolean;
  title: string;
  description: string;
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({
  open,
  title,
  description,
  children,
  onClose,
}: IModalProps) => {
  const onchange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Dialog
      open={open}
      onOpenChange={onchange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};
