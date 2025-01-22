"use client"

import { useState, useEffect } from "react";

interface ImageUploadProps {
    value: string,
    onChange: (src: string) => void;
    disabled?: boolean
}

export const ImageUpload = ({
    value,
    onChange,
    disabled

}: ImageUploadProps) => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {

    }, [])
}