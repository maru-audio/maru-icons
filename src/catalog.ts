// Generated from icons.json by scripts/generate.mjs. Do not edit.
import type { MaruIconData } from "./types.js"

export const iconCatalog: readonly MaruIconData[] = [
  {
    "name": "sine-wave",
    "componentName": "SineWaveIcon",
    "label": "Sine wave",
    "category": "Waveforms",
    "tags": [
      "oscillator",
      "smooth",
      "periodic"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 12C6 1 9 1 12 12S18 23 21 12"
        }
      ]
    ]
  },
  {
    "name": "triangle-wave",
    "componentName": "TriangleWaveIcon",
    "label": "Triangle wave",
    "category": "Waveforms",
    "tags": [
      "oscillator",
      "periodic"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 17 7.5 7 16.5 17 21 7"
        }
      ]
    ]
  },
  {
    "name": "saw-wave",
    "componentName": "SawWaveIcon",
    "label": "Saw wave",
    "category": "Waveforms",
    "tags": [
      "oscillator",
      "sawtooth",
      "ramp"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 17 12 7v10l9-10v10"
        }
      ]
    ]
  },
  {
    "name": "square-wave",
    "componentName": "SquareWaveIcon",
    "label": "Square wave",
    "category": "Waveforms",
    "tags": [
      "oscillator",
      "pulse",
      "periodic"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 17V7h9v10h9V7"
        }
      ]
    ]
  },
  {
    "name": "pulse-wave",
    "componentName": "PulseWaveIcon",
    "label": "Pulse wave",
    "category": "Waveforms",
    "tags": [
      "oscillator",
      "duty",
      "width",
      "pwm"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 17V7h5v10h9V7h4"
        }
      ]
    ]
  },
  {
    "name": "noise",
    "componentName": "NoiseIcon",
    "label": "Noise",
    "category": "Waveforms",
    "tags": [
      "random",
      "oscillator",
      "white"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m3 13 2-4 2 8 2-12 2 10 2-5 2 8 2-11 2 7 2-3"
        }
      ]
    ]
  },
  {
    "name": "sample-hold",
    "componentName": "SampleHoldIcon",
    "label": "Sample and hold",
    "category": "Modulation",
    "tags": [
      "random",
      "stepped",
      "lfo"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 16h4V7h5v12h5V5h4"
        }
      ]
    ]
  },
  {
    "name": "adsr-envelope",
    "componentName": "AdsrEnvelopeIcon",
    "label": "ADSR envelope",
    "category": "Modulation",
    "tags": [
      "attack",
      "decay",
      "sustain",
      "release"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 20 7 4l4 9h5l5 7"
        }
      ]
    ]
  },
  {
    "name": "ar-envelope",
    "componentName": "ArEnvelopeIcon",
    "label": "AR envelope",
    "category": "Modulation",
    "tags": [
      "attack",
      "release",
      "percussion"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 20 8 4c1 9 5 14 13 16"
        }
      ]
    ]
  },
  {
    "name": "lfo",
    "componentName": "LfoIcon",
    "label": "LFO",
    "category": "Modulation",
    "tags": [
      "low",
      "frequency",
      "oscillator",
      "modulation"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 12C5 4 8 4 10 12s5 8 7 0 3-8 4 0"
        }
      ],
      [
        "path",
        {
          "d": "M4 3v3m-1-1h2M19 19h3"
        }
      ]
    ]
  },
  {
    "name": "modulation",
    "componentName": "ModulationIcon",
    "label": "Modulation routing",
    "category": "Modulation",
    "tags": [
      "assign",
      "source",
      "destination"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": 5,
          "cy": 6,
          "r": 2
        }
      ],
      [
        "circle",
        {
          "cx": 19,
          "cy": 18,
          "r": 2
        }
      ],
      [
        "path",
        {
          "d": "M7 6h4a3 3 0 0 1 3 3v6a3 3 0 0 0 3 3M10 14l4-4 4 4"
        }
      ]
    ]
  },
  {
    "name": "low-pass-filter",
    "componentName": "LowPassFilterIcon",
    "label": "Low-pass filter",
    "category": "Filters and EQ",
    "tags": [
      "cutoff",
      "high",
      "cut",
      "lp"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 6h7c5 0 4 12 11 12"
        }
      ]
    ]
  },
  {
    "name": "high-pass-filter",
    "componentName": "HighPassFilterIcon",
    "label": "High-pass filter",
    "category": "Filters and EQ",
    "tags": [
      "cutoff",
      "low",
      "cut",
      "hp"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 18c7 0 6-12 11-12h7"
        }
      ]
    ]
  },
  {
    "name": "band-pass-filter",
    "componentName": "BandPassFilterIcon",
    "label": "Band-pass filter",
    "category": "Filters and EQ",
    "tags": [
      "bp",
      "cutoff",
      "resonance"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 18c5 0 4-12 9-12s4 12 9 12"
        }
      ]
    ]
  },
  {
    "name": "notch-filter",
    "componentName": "NotchFilterIcon",
    "label": "Notch filter",
    "category": "Filters and EQ",
    "tags": [
      "band",
      "reject",
      "stop"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 6c5 0 4 12 9 12s4-12 9-12"
        }
      ]
    ]
  },
  {
    "name": "bell-eq",
    "componentName": "BellEqIcon",
    "label": "Bell EQ",
    "category": "Filters and EQ",
    "tags": [
      "parametric",
      "peak",
      "equalizer"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 16h3c3 0 3-10 6-10s3 10 6 10h3"
        }
      ]
    ]
  },
  {
    "name": "low-shelf-eq",
    "componentName": "LowShelfEqIcon",
    "label": "Low shelf EQ",
    "category": "Filters and EQ",
    "tags": [
      "bass",
      "equalizer"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 6h5c4 0 4 10 8 10h5"
        }
      ]
    ]
  },
  {
    "name": "high-shelf-eq",
    "componentName": "HighShelfEqIcon",
    "label": "High shelf EQ",
    "category": "Filters and EQ",
    "tags": [
      "treble",
      "equalizer"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 16h5c4 0 4-10 8-10h5"
        }
      ]
    ]
  },
  {
    "name": "knob",
    "componentName": "KnobIcon",
    "label": "Knob",
    "category": "Controls",
    "tags": [
      "dial",
      "parameter",
      "rotary"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M6 19a9 9 0 1 1 12 0"
        }
      ],
      [
        "path",
        {
          "d": "m12 12 4-4"
        }
      ]
    ]
  },
  {
    "name": "bipolar-knob",
    "componentName": "BipolarKnobIcon",
    "label": "Bipolar knob",
    "category": "Controls",
    "tags": [
      "dial",
      "centered",
      "pan",
      "rotary"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M6 19a9 9 0 1 1 12 0M12 12V7M12 2v1M3 12H2m20 0h-1"
        }
      ]
    ]
  },
  {
    "name": "fader",
    "componentName": "FaderIcon",
    "label": "Fader",
    "category": "Controls",
    "tags": [
      "slider",
      "mixer",
      "level"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 3v5m0 8v5"
        }
      ],
      [
        "rect",
        {
          "x": 7,
          "y": 8,
          "width": 10,
          "height": 8
        }
      ],
      [
        "path",
        {
          "d": "M10 12h4"
        }
      ]
    ]
  },
  {
    "name": "step-sequencer",
    "componentName": "StepSequencerIcon",
    "label": "Step sequencer",
    "category": "Controls",
    "tags": [
      "pattern",
      "rhythm",
      "steps"
    ],
    "nodes": [
      [
        "rect",
        {
          "x": 3,
          "y": 14,
          "width": 4,
          "height": 6
        }
      ],
      [
        "rect",
        {
          "x": 10,
          "y": 8,
          "width": 4,
          "height": 12
        }
      ],
      [
        "rect",
        {
          "x": 17,
          "y": 4,
          "width": 4,
          "height": 16
        }
      ]
    ]
  },
  {
    "name": "mono",
    "componentName": "MonoIcon",
    "label": "Mono",
    "category": "Signal",
    "tags": [
      "channel",
      "single"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": 12,
          "cy": 12,
          "r": 6
        }
      ],
      [
        "path",
        {
          "d": "M3 12h3m12 0h3"
        }
      ]
    ]
  },
  {
    "name": "stereo",
    "componentName": "StereoIcon",
    "label": "Stereo",
    "category": "Signal",
    "tags": [
      "channels",
      "left",
      "right"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": 8,
          "cy": 12,
          "r": 6
        }
      ],
      [
        "circle",
        {
          "cx": 16,
          "cy": 12,
          "r": 6
        }
      ]
    ]
  },
  {
    "name": "split-signal",
    "componentName": "SplitSignalIcon",
    "label": "Split signal",
    "category": "Signal",
    "tags": [
      "branch",
      "parallel",
      "send"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 12h6l7-7h5M9 12l7 7h5m-3-3 3 3-3 3m0-20 3 3-3 3"
        }
      ]
    ]
  },
  {
    "name": "merge-signal",
    "componentName": "MergeSignalIcon",
    "label": "Merge signal",
    "category": "Signal",
    "tags": [
      "mix",
      "combine",
      "sum"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 5h4l7 7h7M3 19h4l7-7m4-3 3 3-3 3"
        }
      ]
    ]
  },
  {
    "name": "midi-din",
    "componentName": "MidiDinIcon",
    "label": "MIDI DIN",
    "category": "Routing",
    "tags": [
      "connector",
      "socket",
      "five",
      "pin"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": 12,
          "cy": 12,
          "r": 9.5
        }
      ],
      [
        "path",
        {
          "d": "M10.4 3.1 A9.5 9.5 0 0 1 13.6 3.1"
        }
      ],
      [
        "circle",
        {
          "cx": 7,
          "cy": 14,
          "r": 0.9,
          "fill": "currentColor",
          "stroke": "none"
        }
      ],
      [
        "circle",
        {
          "cx": 12,
          "cy": 15.2,
          "r": 0.9,
          "fill": "currentColor",
          "stroke": "none"
        }
      ],
      [
        "circle",
        {
          "cx": 17,
          "cy": 14,
          "r": 0.9,
          "fill": "currentColor",
          "stroke": "none"
        }
      ],
      [
        "circle",
        {
          "cx": 8.4,
          "cy": 8.8,
          "r": 0.9,
          "fill": "currentColor",
          "stroke": "none"
        }
      ],
      [
        "circle",
        {
          "cx": 15.6,
          "cy": 8.8,
          "r": 0.9,
          "fill": "currentColor",
          "stroke": "none"
        }
      ]
    ]
  },
  {
    "name": "compressor",
    "componentName": "CompressorIcon",
    "label": "Compressor",
    "category": "Effects",
    "tags": [
      "dynamics",
      "threshold",
      "ratio"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 21V3m0 18h18M5 19l8-8 8-3"
        }
      ]
    ]
  },
  {
    "name": "limiter",
    "componentName": "LimiterIcon",
    "label": "Limiter",
    "category": "Effects",
    "tags": [
      "dynamics",
      "ceiling",
      "peak"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 21V3m0 18h18M5 19l8-10h8"
        }
      ]
    ]
  },
  {
    "name": "saturation",
    "componentName": "SaturationIcon",
    "label": "Saturation",
    "category": "Effects",
    "tags": [
      "distortion",
      "drive",
      "clip"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 18c4 0 3-12 7-12h4c4 0 3 12 7 12"
        }
      ]
    ]
  },
  {
    "name": "delay",
    "componentName": "DelayIcon",
    "label": "Delay",
    "category": "Effects",
    "tags": [
      "echo",
      "repeat",
      "feedback"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M4 5v14M9 8v11m5-8v8m5-5v5"
        }
      ]
    ]
  },
  {
    "name": "reverb",
    "componentName": "ReverbIcon",
    "label": "Reverb",
    "category": "Effects",
    "tags": [
      "space",
      "room",
      "decay"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 19V5l4 14 3-11 3 11 3-7 3 7 2-3"
        }
      ]
    ]
  },
  {
    "name": "headphones",
    "componentName": "HeadphonesIcon",
    "label": "Headphones",
    "category": "Devices",
    "tags": [
      "headphones",
      "audio",
      "devices"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "headphones",
      "version": "1.31.0"
    }
  },
  {
    "name": "headphone-off",
    "componentName": "HeadphoneOffIcon",
    "label": "Headphones off",
    "category": "Devices",
    "tags": [
      "headphone-off",
      "audio",
      "devices"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M21 14h-1.343"
        }
      ],
      [
        "path",
        {
          "d": "M9.128 3.47A9 9 0 0 1 21 12v3.343"
        }
      ],
      [
        "path",
        {
          "d": "m2 2 20 20"
        }
      ],
      [
        "path",
        {
          "d": "M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3"
        }
      ],
      [
        "path",
        {
          "d": "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "headphone-off",
      "version": "1.31.0"
    }
  },
  {
    "name": "speaker",
    "componentName": "SpeakerIcon",
    "label": "Speaker",
    "category": "Monitoring",
    "tags": [
      "speaker",
      "audio",
      "devices"
    ],
    "nodes": [
      [
        "rect",
        {
          "width": "16",
          "height": "20",
          "x": "4",
          "y": "2",
          "rx": "2"
        }
      ],
      [
        "path",
        {
          "d": "M12 6h.01"
        }
      ],
      [
        "circle",
        {
          "cx": "12",
          "cy": "14",
          "r": "4"
        }
      ],
      [
        "path",
        {
          "d": "M12 14h.01"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "speaker",
      "version": "1.31.0"
    }
  },
  {
    "name": "mic",
    "componentName": "MicIcon",
    "label": "Microphone",
    "category": "Devices",
    "tags": [
      "mic",
      "audio",
      "devices"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 19v3"
        }
      ],
      [
        "path",
        {
          "d": "M19 10v2a7 7 0 0 1-14 0v-2"
        }
      ],
      [
        "rect",
        {
          "x": "9",
          "y": "2",
          "width": "6",
          "height": "13",
          "rx": "3"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "mic",
      "version": "1.31.0"
    }
  },
  {
    "name": "mic-off",
    "componentName": "MicOffIcon",
    "label": "Microphone off",
    "category": "Devices",
    "tags": [
      "mic-off",
      "audio",
      "devices"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 19v3"
        }
      ],
      [
        "path",
        {
          "d": "M15 9.34V5a3 3 0 0 0-5.68-1.33"
        }
      ],
      [
        "path",
        {
          "d": "M16.95 16.95A7 7 0 0 1 5 12v-2"
        }
      ],
      [
        "path",
        {
          "d": "M18.89 13.23A7 7 0 0 0 19 12v-2"
        }
      ],
      [
        "path",
        {
          "d": "m2 2 20 20"
        }
      ],
      [
        "path",
        {
          "d": "M9 9v3a3 3 0 0 0 5.12 2.12"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "mic-off",
      "version": "1.31.0"
    }
  },
  {
    "name": "radio",
    "componentName": "RadioIcon",
    "label": "Radio",
    "category": "Devices",
    "tags": [
      "radio",
      "audio",
      "devices"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M16.247 7.761a6 6 0 0 1 0 8.478"
        }
      ],
      [
        "path",
        {
          "d": "M19.075 4.933a10 10 0 0 1 0 14.134"
        }
      ],
      [
        "path",
        {
          "d": "M4.925 19.067a10 10 0 0 1 0-14.134"
        }
      ],
      [
        "path",
        {
          "d": "M7.753 16.239a6 6 0 0 1 0-8.478"
        }
      ],
      [
        "circle",
        {
          "cx": "12",
          "cy": "12",
          "r": "2"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "radio",
      "version": "1.31.0"
    }
  },
  {
    "name": "ear",
    "componentName": "EarIcon",
    "label": "Ear",
    "category": "Devices",
    "tags": [
      "ear",
      "audio",
      "devices"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"
        }
      ],
      [
        "path",
        {
          "d": "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "ear",
      "version": "1.31.0"
    }
  },
  {
    "name": "ear-off",
    "componentName": "EarOffIcon",
    "label": "Ear protection",
    "category": "Devices",
    "tags": [
      "ear-off",
      "audio",
      "devices"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"
        }
      ],
      [
        "path",
        {
          "d": "M6 8.5c0-.75.13-1.47.36-2.14"
        }
      ],
      [
        "path",
        {
          "d": "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"
        }
      ],
      [
        "path",
        {
          "d": "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"
        }
      ],
      [
        "line",
        {
          "x1": "2",
          "x2": "22",
          "y1": "2",
          "y2": "22"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "ear-off",
      "version": "1.31.0"
    }
  },
  {
    "name": "volume",
    "componentName": "VolumeIcon",
    "label": "Volume",
    "category": "Monitoring",
    "tags": [
      "volume",
      "audio",
      "devices",
      "speaker",
      "volume bars"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "volume",
      "version": "1.31.0"
    }
  },
  {
    "name": "volume-1",
    "componentName": "Volume1Icon",
    "label": "Low volume",
    "category": "Monitoring",
    "tags": [
      "volume-1",
      "audio",
      "devices",
      "speaker",
      "volume bars"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
        }
      ],
      [
        "path",
        {
          "d": "M16 9a5 5 0 0 1 0 6"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "volume-1",
      "version": "1.31.0"
    }
  },
  {
    "name": "volume-2",
    "componentName": "Volume2Icon",
    "label": "High volume",
    "category": "Monitoring",
    "tags": [
      "volume-2",
      "audio",
      "devices",
      "speaker",
      "volume bars"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
        }
      ],
      [
        "path",
        {
          "d": "M16 9a5 5 0 0 1 0 6"
        }
      ],
      [
        "path",
        {
          "d": "M19.364 18.364a9 9 0 0 0 0-12.728"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "volume-2",
      "version": "1.31.0"
    }
  },
  {
    "name": "volume-x",
    "componentName": "VolumeXIcon",
    "label": "Mute",
    "category": "Monitoring",
    "tags": [
      "volume-x",
      "audio",
      "devices",
      "speaker off",
      "mute"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
        }
      ],
      [
        "line",
        {
          "x1": "22",
          "x2": "16",
          "y1": "9",
          "y2": "15"
        }
      ],
      [
        "line",
        {
          "x1": "16",
          "x2": "22",
          "y1": "9",
          "y2": "15"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "volume-x",
      "version": "1.31.0"
    }
  },
  {
    "name": "bluetooth",
    "componentName": "BluetoothIcon",
    "label": "Bluetooth",
    "category": "Devices",
    "tags": [
      "bluetooth",
      "audio",
      "devices"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m7 7 10 10-5 5V2l5 5L7 17"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "bluetooth",
      "version": "1.31.0"
    }
  },
  {
    "name": "usb",
    "componentName": "UsbIcon",
    "label": "USB",
    "category": "Devices",
    "tags": [
      "usb",
      "audio",
      "devices"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": "10",
          "cy": "7",
          "r": "1"
        }
      ],
      [
        "circle",
        {
          "cx": "4",
          "cy": "20",
          "r": "1"
        }
      ],
      [
        "path",
        {
          "d": "M4.7 19.3 19 5"
        }
      ],
      [
        "path",
        {
          "d": "m21 3-3 1 2 2Z"
        }
      ],
      [
        "path",
        {
          "d": "M9.26 7.68 5 12l2 5"
        }
      ],
      [
        "path",
        {
          "d": "m10 14 5 2 3.5-3.5"
        }
      ],
      [
        "path",
        {
          "d": "m18 12 1-1 1 1-1 1Z"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "usb",
      "version": "1.31.0"
    }
  },
  {
    "name": "cable",
    "componentName": "CableIcon",
    "label": "Cable",
    "category": "Devices",
    "tags": [
      "cable",
      "audio",
      "devices"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"
        }
      ],
      [
        "path",
        {
          "d": "M17 21v-2"
        }
      ],
      [
        "path",
        {
          "d": "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"
        }
      ],
      [
        "path",
        {
          "d": "M21 21v-2"
        }
      ],
      [
        "path",
        {
          "d": "M3 5V3"
        }
      ],
      [
        "path",
        {
          "d": "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"
        }
      ],
      [
        "path",
        {
          "d": "M7 5V3"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "cable",
      "version": "1.31.0"
    }
  },
  {
    "name": "plug",
    "componentName": "PlugIcon",
    "label": "Plug",
    "category": "Devices",
    "tags": [
      "plug",
      "audio",
      "devices"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 22v-5"
        }
      ],
      [
        "path",
        {
          "d": "M15 8V2"
        }
      ],
      [
        "path",
        {
          "d": "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z"
        }
      ],
      [
        "path",
        {
          "d": "M9 8V2"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "plug",
      "version": "1.31.0"
    }
  },
  {
    "name": "unplug",
    "componentName": "UnplugIcon",
    "label": "Unplug",
    "category": "Devices",
    "tags": [
      "unplug",
      "audio",
      "devices"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m19 5 3-3"
        }
      ],
      [
        "path",
        {
          "d": "m2 22 3-3"
        }
      ],
      [
        "path",
        {
          "d": "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
        }
      ],
      [
        "path",
        {
          "d": "M7.5 13.5 10 11"
        }
      ],
      [
        "path",
        {
          "d": "M10.5 16.5 13 14"
        }
      ],
      [
        "path",
        {
          "d": "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "unplug",
      "version": "1.31.0"
    }
  },
  {
    "name": "piano",
    "componentName": "PianoIcon",
    "label": "Piano",
    "category": "Instruments",
    "tags": [
      "piano",
      "audio",
      "instruments"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"
        }
      ],
      [
        "path",
        {
          "d": "M2 14h20"
        }
      ],
      [
        "path",
        {
          "d": "M6 14v4"
        }
      ],
      [
        "path",
        {
          "d": "M10 14v4"
        }
      ],
      [
        "path",
        {
          "d": "M14 14v4"
        }
      ],
      [
        "path",
        {
          "d": "M18 14v4"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "piano",
      "version": "1.31.0"
    }
  },
  {
    "name": "guitar",
    "componentName": "GuitarIcon",
    "label": "Guitar",
    "category": "Instruments",
    "tags": [
      "guitar",
      "audio",
      "instruments"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m11.9 12.1 4.514-4.514"
        }
      ],
      [
        "path",
        {
          "d": "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"
        }
      ],
      [
        "path",
        {
          "d": "m6 16 2 2"
        }
      ],
      [
        "path",
        {
          "d": "M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "guitar",
      "version": "1.31.0"
    }
  },
  {
    "name": "drum",
    "componentName": "DrumIcon",
    "label": "Drum",
    "category": "Instruments",
    "tags": [
      "drum",
      "audio",
      "instruments"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m2 2 8 8"
        }
      ],
      [
        "path",
        {
          "d": "m22 2-8 8"
        }
      ],
      [
        "ellipse",
        {
          "cx": "12",
          "cy": "9",
          "rx": "10",
          "ry": "5"
        }
      ],
      [
        "path",
        {
          "d": "M7 13.4v7.9"
        }
      ],
      [
        "path",
        {
          "d": "M12 14v8"
        }
      ],
      [
        "path",
        {
          "d": "M17 13.4v7.9"
        }
      ],
      [
        "path",
        {
          "d": "M2 9v8a10 5 0 0 0 20 0V9"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "drum",
      "version": "1.31.0"
    }
  },
  {
    "name": "music",
    "componentName": "MusicIcon",
    "label": "Music note",
    "category": "Instruments",
    "tags": [
      "music",
      "audio",
      "instruments"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M9 18V5l12-2v13"
        }
      ],
      [
        "circle",
        {
          "cx": "6",
          "cy": "18",
          "r": "3"
        }
      ],
      [
        "circle",
        {
          "cx": "18",
          "cy": "16",
          "r": "3"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "music",
      "version": "1.31.0"
    }
  },
  {
    "name": "list-music",
    "componentName": "ListMusicIcon",
    "label": "Playlist",
    "category": "Instruments",
    "tags": [
      "list-music",
      "audio",
      "instruments"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M16 5H3"
        }
      ],
      [
        "path",
        {
          "d": "M11 12H3"
        }
      ],
      [
        "path",
        {
          "d": "M11 19H3"
        }
      ],
      [
        "path",
        {
          "d": "M21 16V5"
        }
      ],
      [
        "circle",
        {
          "cx": "18",
          "cy": "16",
          "r": "3"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "list-music",
      "version": "1.31.0"
    }
  },
  {
    "name": "disc-3",
    "componentName": "Disc3Icon",
    "label": "Record disc",
    "category": "Instruments",
    "tags": [
      "disc-3",
      "audio",
      "instruments"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": "12",
          "cy": "12",
          "r": "10"
        }
      ],
      [
        "path",
        {
          "d": "M6 12c0-1.7.7-3.2 1.8-4.2"
        }
      ],
      [
        "circle",
        {
          "cx": "12",
          "cy": "12",
          "r": "2"
        }
      ],
      [
        "path",
        {
          "d": "M18 12c0 1.7-.7 3.2-1.8 4.2"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "disc-3",
      "version": "1.31.0"
    }
  },
  {
    "name": "boom-box",
    "componentName": "BoomBoxIcon",
    "label": "Boombox",
    "category": "Instruments",
    "tags": [
      "boom-box",
      "audio",
      "instruments"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
        }
      ],
      [
        "path",
        {
          "d": "M8 8v1"
        }
      ],
      [
        "path",
        {
          "d": "M12 8v1"
        }
      ],
      [
        "path",
        {
          "d": "M16 8v1"
        }
      ],
      [
        "rect",
        {
          "width": "20",
          "height": "12",
          "x": "2",
          "y": "9",
          "rx": "2"
        }
      ],
      [
        "circle",
        {
          "cx": "8",
          "cy": "15",
          "r": "2"
        }
      ],
      [
        "circle",
        {
          "cx": "16",
          "cy": "15",
          "r": "2"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "boom-box",
      "version": "1.31.0"
    }
  },
  {
    "name": "play",
    "componentName": "PlayIcon",
    "label": "Play",
    "category": "Transport",
    "tags": [
      "play",
      "audio",
      "transport"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "play",
      "version": "1.31.0"
    }
  },
  {
    "name": "pause",
    "componentName": "PauseIcon",
    "label": "Pause",
    "category": "Transport",
    "tags": [
      "pause",
      "audio",
      "transport"
    ],
    "nodes": [
      [
        "rect",
        {
          "x": "14",
          "y": "3",
          "width": "5",
          "height": "18",
          "rx": "1"
        }
      ],
      [
        "rect",
        {
          "x": "5",
          "y": "3",
          "width": "5",
          "height": "18",
          "rx": "1"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "pause",
      "version": "1.31.0"
    }
  },
  {
    "name": "stop",
    "componentName": "StopIcon",
    "label": "Stop",
    "category": "Transport",
    "tags": [
      "square",
      "audio",
      "transport"
    ],
    "nodes": [
      [
        "rect",
        {
          "width": "18",
          "height": "18",
          "x": "3",
          "y": "3",
          "rx": "2"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "square",
      "version": "1.31.0"
    }
  },
  {
    "name": "record",
    "componentName": "RecordIcon",
    "label": "Record",
    "category": "Transport",
    "tags": [
      "circle",
      "audio",
      "transport"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": "12",
          "cy": "12",
          "r": "10"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "circle",
      "version": "1.31.0"
    }
  },
  {
    "name": "skip-back",
    "componentName": "SkipBackIcon",
    "label": "Previous",
    "category": "Transport",
    "tags": [
      "skip-back",
      "audio",
      "transport"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"
        }
      ],
      [
        "path",
        {
          "d": "M3 20V4"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "skip-back",
      "version": "1.31.0"
    }
  },
  {
    "name": "skip-forward",
    "componentName": "SkipForwardIcon",
    "label": "Next",
    "category": "Transport",
    "tags": [
      "skip-forward",
      "audio",
      "transport"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M21 4v16"
        }
      ],
      [
        "path",
        {
          "d": "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "skip-forward",
      "version": "1.31.0"
    }
  },
  {
    "name": "rewind",
    "componentName": "RewindIcon",
    "label": "Rewind",
    "category": "Transport",
    "tags": [
      "rewind",
      "audio",
      "transport"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z"
        }
      ],
      [
        "path",
        {
          "d": "M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "rewind",
      "version": "1.31.0"
    }
  },
  {
    "name": "fast-forward",
    "componentName": "FastForwardIcon",
    "label": "Fast forward",
    "category": "Transport",
    "tags": [
      "fast-forward",
      "audio",
      "transport"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"
        }
      ],
      [
        "path",
        {
          "d": "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "fast-forward",
      "version": "1.31.0"
    }
  },
  {
    "name": "repeat",
    "componentName": "RepeatIcon",
    "label": "Repeat",
    "category": "Transport",
    "tags": [
      "repeat",
      "audio",
      "transport"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m17 2 4 4-4 4"
        }
      ],
      [
        "path",
        {
          "d": "M3 11v-1a4 4 0 0 1 4-4h14"
        }
      ],
      [
        "path",
        {
          "d": "m7 22-4-4 4-4"
        }
      ],
      [
        "path",
        {
          "d": "M21 13v1a4 4 0 0 1-4 4H3"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "repeat",
      "version": "1.31.0"
    }
  },
  {
    "name": "repeat-1",
    "componentName": "Repeat1Icon",
    "label": "Repeat once",
    "category": "Transport",
    "tags": [
      "repeat-1",
      "audio",
      "transport"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m17 2 4 4-4 4"
        }
      ],
      [
        "path",
        {
          "d": "M3 11v-1a4 4 0 0 1 4-4h14"
        }
      ],
      [
        "path",
        {
          "d": "m7 22-4-4 4-4"
        }
      ],
      [
        "path",
        {
          "d": "M21 13v1a4 4 0 0 1-4 4H3"
        }
      ],
      [
        "path",
        {
          "d": "M11 10h1v4"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "repeat-1",
      "version": "1.31.0"
    }
  },
  {
    "name": "shuffle",
    "componentName": "ShuffleIcon",
    "label": "Shuffle",
    "category": "Transport",
    "tags": [
      "shuffle",
      "audio",
      "transport"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m18 14 4 4-4 4"
        }
      ],
      [
        "path",
        {
          "d": "m18 2 4 4-4 4"
        }
      ],
      [
        "path",
        {
          "d": "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"
        }
      ],
      [
        "path",
        {
          "d": "M2 6h1.972a4 4 0 0 1 3.6 2.2"
        }
      ],
      [
        "path",
        {
          "d": "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "shuffle",
      "version": "1.31.0"
    }
  },
  {
    "name": "metronome",
    "componentName": "MetronomeIcon",
    "label": "Metronome",
    "category": "Transport",
    "tags": [
      "metronome",
      "audio",
      "transport"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 11.4V9.1"
        }
      ],
      [
        "path",
        {
          "d": "m12 17 6.59-6.59"
        }
      ],
      [
        "path",
        {
          "d": "m15.05 5.7-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2"
        }
      ],
      [
        "circle",
        {
          "cx": "20",
          "cy": "9",
          "r": "2"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "metronome",
      "version": "1.31.0"
    }
  },
  {
    "name": "timer",
    "componentName": "TimerIcon",
    "label": "Timer",
    "category": "Transport",
    "tags": [
      "timer",
      "audio",
      "transport"
    ],
    "nodes": [
      [
        "line",
        {
          "x1": "10",
          "x2": "14",
          "y1": "2",
          "y2": "2"
        }
      ],
      [
        "line",
        {
          "x1": "12",
          "x2": "15",
          "y1": "14",
          "y2": "11"
        }
      ],
      [
        "circle",
        {
          "cx": "12",
          "cy": "14",
          "r": "8"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "timer",
      "version": "1.31.0"
    }
  },
  {
    "name": "sliders-horizontal",
    "componentName": "SlidersHorizontalIcon",
    "label": "Horizontal mixer",
    "category": "General",
    "tags": [
      "sliders-horizontal",
      "audio",
      "editing"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M10 5H3"
        }
      ],
      [
        "path",
        {
          "d": "M12 19H3"
        }
      ],
      [
        "path",
        {
          "d": "M14 3v4"
        }
      ],
      [
        "path",
        {
          "d": "M16 17v4"
        }
      ],
      [
        "path",
        {
          "d": "M21 12h-9"
        }
      ],
      [
        "path",
        {
          "d": "M21 19h-5"
        }
      ],
      [
        "path",
        {
          "d": "M21 5h-7"
        }
      ],
      [
        "path",
        {
          "d": "M8 10v4"
        }
      ],
      [
        "path",
        {
          "d": "M8 12H3"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "sliders-horizontal",
      "version": "1.31.0"
    }
  },
  {
    "name": "sliders-vertical",
    "componentName": "SlidersVerticalIcon",
    "label": "Vertical mixer",
    "category": "General",
    "tags": [
      "sliders-vertical",
      "audio",
      "editing"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M10 8h4"
        }
      ],
      [
        "path",
        {
          "d": "M12 21v-9"
        }
      ],
      [
        "path",
        {
          "d": "M12 8V3"
        }
      ],
      [
        "path",
        {
          "d": "M17 16h4"
        }
      ],
      [
        "path",
        {
          "d": "M19 12V3"
        }
      ],
      [
        "path",
        {
          "d": "M19 21v-5"
        }
      ],
      [
        "path",
        {
          "d": "M3 14h4"
        }
      ],
      [
        "path",
        {
          "d": "M5 10V3"
        }
      ],
      [
        "path",
        {
          "d": "M5 21v-7"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "sliders-vertical",
      "version": "1.31.0"
    }
  },
  {
    "name": "scissors",
    "componentName": "ScissorsIcon",
    "label": "Cut",
    "category": "Editing",
    "tags": [
      "scissors",
      "audio",
      "editing"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": "6",
          "cy": "6",
          "r": "3"
        }
      ],
      [
        "path",
        {
          "d": "M8.12 8.12 12 12"
        }
      ],
      [
        "path",
        {
          "d": "M20 4 8.12 15.88"
        }
      ],
      [
        "circle",
        {
          "cx": "6",
          "cy": "18",
          "r": "3"
        }
      ],
      [
        "path",
        {
          "d": "M14.8 14.8 20 20"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "scissors",
      "version": "1.31.0"
    }
  },
  {
    "name": "undo-2",
    "componentName": "Undo2Icon",
    "label": "Undo",
    "category": "Editing",
    "tags": [
      "undo-2",
      "audio",
      "editing"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M9 14 4 9l5-5"
        }
      ],
      [
        "path",
        {
          "d": "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "undo-2",
      "version": "1.31.0"
    }
  },
  {
    "name": "redo-2",
    "componentName": "Redo2Icon",
    "label": "Redo",
    "category": "Editing",
    "tags": [
      "redo-2",
      "audio",
      "editing"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m15 14 5-5-5-5"
        }
      ],
      [
        "path",
        {
          "d": "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "redo-2",
      "version": "1.31.0"
    }
  },
  {
    "name": "save",
    "componentName": "SaveIcon",
    "label": "Save",
    "category": "Editing",
    "tags": [
      "save",
      "audio",
      "editing"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
        }
      ],
      [
        "path",
        {
          "d": "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"
        }
      ],
      [
        "path",
        {
          "d": "M7 3v4a1 1 0 0 0 1 1h7"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "save",
      "version": "1.31.0"
    }
  },
  {
    "name": "download",
    "componentName": "DownloadIcon",
    "label": "Download",
    "category": "Editing",
    "tags": [
      "download",
      "audio",
      "editing"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 15V3"
        }
      ],
      [
        "path",
        {
          "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
        }
      ],
      [
        "path",
        {
          "d": "m7 10 5 5 5-5"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "download",
      "version": "1.31.0"
    }
  },
  {
    "name": "upload",
    "componentName": "UploadIcon",
    "label": "Upload",
    "category": "Editing",
    "tags": [
      "upload",
      "audio",
      "editing"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 3v12"
        }
      ],
      [
        "path",
        {
          "d": "m17 8-5-5-5 5"
        }
      ],
      [
        "path",
        {
          "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "upload",
      "version": "1.31.0"
    }
  },
  {
    "name": "power",
    "componentName": "PowerIcon",
    "label": "Power",
    "category": "Signal",
    "tags": [
      "power",
      "audio",
      "editing",
      "on",
      "enable",
      "power on"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 2v10"
        }
      ],
      [
        "path",
        {
          "d": "M18.4 6.6a9 9 0 1 1-12.77.04"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "power",
      "version": "1.31.0"
    }
  },
  {
    "name": "library",
    "componentName": "LibraryIcon",
    "label": "Library",
    "category": "General",
    "tags": [
      "library",
      "audio",
      "editing"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m16 6 4 14"
        }
      ],
      [
        "path",
        {
          "d": "M12 6v14"
        }
      ],
      [
        "path",
        {
          "d": "M8 8v12"
        }
      ],
      [
        "path",
        {
          "d": "M4 4v16"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "library",
      "version": "1.31.0"
    }
  },
  {
    "name": "audio-lines",
    "componentName": "AudioLinesIcon",
    "label": "Audio levels",
    "category": "Signal",
    "tags": [
      "audio-lines",
      "audio",
      "analysis"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M2 10v3"
        }
      ],
      [
        "path",
        {
          "d": "M6 6v11"
        }
      ],
      [
        "path",
        {
          "d": "M10 3v18"
        }
      ],
      [
        "path",
        {
          "d": "M14 8v7"
        }
      ],
      [
        "path",
        {
          "d": "M18 5v13"
        }
      ],
      [
        "path",
        {
          "d": "M22 10v3"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "audio-lines",
      "version": "1.31.0"
    }
  },
  {
    "name": "audio-waveform",
    "componentName": "AudioWaveformIcon",
    "label": "Audio waveform",
    "category": "Signal",
    "tags": [
      "audio-waveform",
      "audio",
      "analysis"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "audio-waveform",
      "version": "1.31.0"
    }
  },
  {
    "name": "info",
    "componentName": "InfoIcon",
    "label": "Info",
    "category": "General",
    "tags": [
      "info",
      "general",
      "information",
      "info circle",
      "about"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": "12",
          "cy": "12",
          "r": "10"
        }
      ],
      [
        "path",
        {
          "d": "M12 16v-4"
        }
      ],
      [
        "path",
        {
          "d": "M12 8h.01"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "info",
      "version": "1.31.0"
    }
  },
  {
    "name": "circle-help",
    "componentName": "CircleHelpIcon",
    "label": "Help",
    "category": "General",
    "tags": [
      "circle-help",
      "general"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": "12",
          "cy": "12",
          "r": "10"
        }
      ],
      [
        "path",
        {
          "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
        }
      ],
      [
        "path",
        {
          "d": "M12 17h.01"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "circle-question-mark",
      "version": "1.31.0"
    }
  },
  {
    "name": "ellipsis",
    "componentName": "EllipsisIcon",
    "label": "More",
    "category": "General",
    "tags": [
      "ellipsis",
      "general",
      "menu",
      "options",
      "more horizontal"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": "12",
          "cy": "12",
          "r": "1"
        }
      ],
      [
        "circle",
        {
          "cx": "19",
          "cy": "12",
          "r": "1"
        }
      ],
      [
        "circle",
        {
          "cx": "5",
          "cy": "12",
          "r": "1"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "ellipsis",
      "version": "1.31.0"
    }
  },
  {
    "name": "ellipsis-vertical",
    "componentName": "EllipsisVerticalIcon",
    "label": "More vertical",
    "category": "General",
    "tags": [
      "ellipsis-vertical",
      "general",
      "menu",
      "options",
      "more vertical"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": "12",
          "cy": "12",
          "r": "1"
        }
      ],
      [
        "circle",
        {
          "cx": "12",
          "cy": "5",
          "r": "1"
        }
      ],
      [
        "circle",
        {
          "cx": "12",
          "cy": "19",
          "r": "1"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "ellipsis-vertical",
      "version": "1.31.0"
    }
  },
  {
    "name": "menu",
    "componentName": "MenuIcon",
    "label": "Menu",
    "category": "General",
    "tags": [
      "menu",
      "general"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M4 5h16"
        }
      ],
      [
        "path",
        {
          "d": "M4 12h16"
        }
      ],
      [
        "path",
        {
          "d": "M4 19h16"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "menu",
      "version": "1.31.0"
    }
  },
  {
    "name": "search",
    "componentName": "SearchIcon",
    "label": "Search",
    "category": "General",
    "tags": [
      "search",
      "general"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m21 21-4.34-4.34"
        }
      ],
      [
        "circle",
        {
          "cx": "11",
          "cy": "11",
          "r": "8"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "search",
      "version": "1.31.0"
    }
  },
  {
    "name": "plus",
    "componentName": "PlusIcon",
    "label": "Plus",
    "category": "General",
    "tags": [
      "plus",
      "general"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M5 12h14"
        }
      ],
      [
        "path",
        {
          "d": "M12 5v14"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "plus",
      "version": "1.31.0"
    }
  },
  {
    "name": "minus",
    "componentName": "MinusIcon",
    "label": "Minus",
    "category": "General",
    "tags": [
      "minus",
      "general"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M5 12h14"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "minus",
      "version": "1.31.0"
    }
  },
  {
    "name": "x",
    "componentName": "XIcon",
    "label": "Close",
    "category": "General",
    "tags": [
      "x",
      "general"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M18 6 6 18"
        }
      ],
      [
        "path",
        {
          "d": "m6 6 12 12"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "x",
      "version": "1.31.0"
    }
  },
  {
    "name": "check",
    "componentName": "CheckIcon",
    "label": "Check",
    "category": "General",
    "tags": [
      "check",
      "general"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M20 6 9 17l-5-5"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "check",
      "version": "1.31.0"
    }
  },
  {
    "name": "copy",
    "componentName": "CopyIcon",
    "label": "Copy",
    "category": "General",
    "tags": [
      "copy",
      "general"
    ],
    "nodes": [
      [
        "rect",
        {
          "width": "14",
          "height": "14",
          "x": "8",
          "y": "8",
          "rx": "2",
          "ry": "2"
        }
      ],
      [
        "path",
        {
          "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "copy",
      "version": "1.31.0"
    }
  },
  {
    "name": "external-link",
    "componentName": "ExternalLinkIcon",
    "label": "External link",
    "category": "General",
    "tags": [
      "external-link",
      "general"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M15 3h6v6"
        }
      ],
      [
        "path",
        {
          "d": "M10 14 21 3"
        }
      ],
      [
        "path",
        {
          "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "external-link",
      "version": "1.31.0"
    }
  },
  {
    "name": "link-2",
    "componentName": "Link2Icon",
    "label": "Link 2",
    "category": "General",
    "tags": [
      "link-2",
      "general"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M9 17H7A5 5 0 0 1 7 7h2"
        }
      ],
      [
        "path",
        {
          "d": "M15 7h2a5 5 0 1 1 0 10h-2"
        }
      ],
      [
        "line",
        {
          "x1": "8",
          "x2": "16",
          "y1": "12",
          "y2": "12"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "link-2",
      "version": "1.31.0"
    }
  },
  {
    "name": "settings",
    "componentName": "SettingsIcon",
    "label": "Settings",
    "category": "General",
    "tags": [
      "settings",
      "general"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
        }
      ],
      [
        "circle",
        {
          "cx": "12",
          "cy": "12",
          "r": "3"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "settings",
      "version": "1.31.0"
    }
  },
  {
    "name": "settings-2",
    "componentName": "Settings2Icon",
    "label": "Settings 2",
    "category": "General",
    "tags": [
      "settings-2",
      "general"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M14 17H5"
        }
      ],
      [
        "path",
        {
          "d": "M19 7h-9"
        }
      ],
      [
        "circle",
        {
          "cx": "17",
          "cy": "17",
          "r": "3"
        }
      ],
      [
        "circle",
        {
          "cx": "7",
          "cy": "7",
          "r": "3"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "settings-2",
      "version": "1.31.0"
    }
  },
  {
    "name": "code-xml",
    "componentName": "CodeXmlIcon",
    "label": "Code xml",
    "category": "General",
    "tags": [
      "code-xml",
      "general"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m18 16 4-4-4-4"
        }
      ],
      [
        "path",
        {
          "d": "m6 8-4 4 4 4"
        }
      ],
      [
        "path",
        {
          "d": "m14.5 4-5 16"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "code-xml",
      "version": "1.31.0"
    }
  },
  {
    "name": "terminal",
    "componentName": "TerminalIcon",
    "label": "Terminal",
    "category": "General",
    "tags": [
      "terminal",
      "general"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 19h8"
        }
      ],
      [
        "path",
        {
          "d": "m4 17 6-6-6-6"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "terminal",
      "version": "1.31.0"
    }
  },
  {
    "name": "hash",
    "componentName": "HashIcon",
    "label": "Hash",
    "category": "General",
    "tags": [
      "hash",
      "general"
    ],
    "nodes": [
      [
        "line",
        {
          "x1": "4",
          "x2": "20",
          "y1": "9",
          "y2": "9"
        }
      ],
      [
        "line",
        {
          "x1": "4",
          "x2": "20",
          "y1": "15",
          "y2": "15"
        }
      ],
      [
        "line",
        {
          "x1": "10",
          "x2": "8",
          "y1": "3",
          "y2": "21"
        }
      ],
      [
        "line",
        {
          "x1": "16",
          "x2": "14",
          "y1": "3",
          "y2": "21"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "hash",
      "version": "1.31.0"
    }
  },
  {
    "name": "sparkles",
    "componentName": "SparklesIcon",
    "label": "Sparkles",
    "category": "General",
    "tags": [
      "sparkles",
      "general"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
        }
      ],
      [
        "path",
        {
          "d": "M20 2v4"
        }
      ],
      [
        "path",
        {
          "d": "M22 4h-4"
        }
      ],
      [
        "circle",
        {
          "cx": "4",
          "cy": "20",
          "r": "2"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "sparkles",
      "version": "1.31.0"
    }
  },
  {
    "name": "heart",
    "componentName": "HeartIcon",
    "label": "Heart",
    "category": "General",
    "tags": [
      "heart",
      "general"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "heart",
      "version": "1.31.0"
    }
  },
  {
    "name": "star",
    "componentName": "StarIcon",
    "label": "Star",
    "category": "General",
    "tags": [
      "star",
      "general"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "star",
      "version": "1.31.0"
    }
  },
  {
    "name": "globe",
    "componentName": "GlobeIcon",
    "label": "Globe",
    "category": "General",
    "tags": [
      "globe",
      "general"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": "12",
          "cy": "12",
          "r": "10"
        }
      ],
      [
        "path",
        {
          "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
        }
      ],
      [
        "path",
        {
          "d": "M2 12h20"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "globe",
      "version": "1.31.0"
    }
  },
  {
    "name": "languages",
    "componentName": "LanguagesIcon",
    "label": "Languages",
    "category": "General",
    "tags": [
      "languages",
      "general"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m5 8 6 6"
        }
      ],
      [
        "path",
        {
          "d": "m4 14 6-6 2-3"
        }
      ],
      [
        "path",
        {
          "d": "M2 5h12"
        }
      ],
      [
        "path",
        {
          "d": "M7 2h1"
        }
      ],
      [
        "path",
        {
          "d": "m22 22-5-10-5 10"
        }
      ],
      [
        "path",
        {
          "d": "M14 18h6"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "languages",
      "version": "1.31.0"
    }
  },
  {
    "name": "arrow-right",
    "componentName": "ArrowRightIcon",
    "label": "Arrow right",
    "category": "Navigation",
    "tags": [
      "arrow-right",
      "navigation"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M5 12h14"
        }
      ],
      [
        "path",
        {
          "d": "m12 5 7 7-7 7"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "arrow-right",
      "version": "1.31.0"
    }
  },
  {
    "name": "arrow-left",
    "componentName": "ArrowLeftIcon",
    "label": "Arrow left",
    "category": "Navigation",
    "tags": [
      "arrow-left",
      "navigation"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m12 19-7-7 7-7"
        }
      ],
      [
        "path",
        {
          "d": "M19 12H5"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "arrow-left",
      "version": "1.31.0"
    }
  },
  {
    "name": "arrow-up",
    "componentName": "ArrowUpIcon",
    "label": "Arrow up",
    "category": "Navigation",
    "tags": [
      "arrow-up",
      "navigation"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m5 12 7-7 7 7"
        }
      ],
      [
        "path",
        {
          "d": "M12 19V5"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "arrow-up",
      "version": "1.31.0"
    }
  },
  {
    "name": "arrow-down",
    "componentName": "ArrowDownIcon",
    "label": "Arrow down",
    "category": "Navigation",
    "tags": [
      "arrow-down",
      "navigation"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 5v14"
        }
      ],
      [
        "path",
        {
          "d": "m19 12-7 7-7-7"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "arrow-down",
      "version": "1.31.0"
    }
  },
  {
    "name": "arrow-up-right",
    "componentName": "ArrowUpRightIcon",
    "label": "Arrow up right",
    "category": "Navigation",
    "tags": [
      "arrow-up-right",
      "navigation"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M7 7h10v10"
        }
      ],
      [
        "path",
        {
          "d": "M7 17 17 7"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "arrow-up-right",
      "version": "1.31.0"
    }
  },
  {
    "name": "chevron-right",
    "componentName": "ChevronRightIcon",
    "label": "Chevron right",
    "category": "Navigation",
    "tags": [
      "chevron-right",
      "navigation"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m9 18 6-6-6-6"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "chevron-right",
      "version": "1.31.0"
    }
  },
  {
    "name": "chevron-left",
    "componentName": "ChevronLeftIcon",
    "label": "Chevron left",
    "category": "Navigation",
    "tags": [
      "chevron-left",
      "navigation"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m15 18-6-6 6-6"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "chevron-left",
      "version": "1.31.0"
    }
  },
  {
    "name": "chevron-down",
    "componentName": "ChevronDownIcon",
    "label": "Chevron down",
    "category": "Navigation",
    "tags": [
      "chevron-down",
      "navigation"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m6 9 6 6 6-6"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "chevron-down",
      "version": "1.31.0"
    }
  },
  {
    "name": "chevron-up",
    "componentName": "ChevronUpIcon",
    "label": "Chevron up",
    "category": "Navigation",
    "tags": [
      "chevron-up",
      "navigation"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m18 15-6-6-6 6"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "chevron-up",
      "version": "1.31.0"
    }
  },
  {
    "name": "chevrons-up-down",
    "componentName": "ChevronsUpDownIcon",
    "label": "Chevrons up down",
    "category": "Navigation",
    "tags": [
      "chevrons-up-down",
      "navigation"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m7 15 5 5 5-5"
        }
      ],
      [
        "path",
        {
          "d": "m7 9 5-5 5 5"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "chevrons-up-down",
      "version": "1.31.0"
    }
  },
  {
    "name": "panel-left",
    "componentName": "PanelLeftIcon",
    "label": "Panel left",
    "category": "Navigation",
    "tags": [
      "panel-left",
      "navigation"
    ],
    "nodes": [
      [
        "rect",
        {
          "width": "18",
          "height": "18",
          "x": "3",
          "y": "3",
          "rx": "2"
        }
      ],
      [
        "path",
        {
          "d": "M9 3v18"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "panel-left",
      "version": "1.31.0"
    }
  },
  {
    "name": "panel-right",
    "componentName": "PanelRightIcon",
    "label": "Panel right",
    "category": "Navigation",
    "tags": [
      "panel-right",
      "navigation"
    ],
    "nodes": [
      [
        "rect",
        {
          "width": "18",
          "height": "18",
          "x": "3",
          "y": "3",
          "rx": "2"
        }
      ],
      [
        "path",
        {
          "d": "M15 3v18"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "panel-right",
      "version": "1.31.0"
    }
  },
  {
    "name": "layout-grid",
    "componentName": "LayoutGridIcon",
    "label": "Layout grid",
    "category": "Navigation",
    "tags": [
      "layout-grid",
      "navigation"
    ],
    "nodes": [
      [
        "rect",
        {
          "width": "7",
          "height": "7",
          "x": "3",
          "y": "3",
          "rx": "1"
        }
      ],
      [
        "rect",
        {
          "width": "7",
          "height": "7",
          "x": "14",
          "y": "3",
          "rx": "1"
        }
      ],
      [
        "rect",
        {
          "width": "7",
          "height": "7",
          "x": "14",
          "y": "14",
          "rx": "1"
        }
      ],
      [
        "rect",
        {
          "width": "7",
          "height": "7",
          "x": "3",
          "y": "14",
          "rx": "1"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "layout-grid",
      "version": "1.31.0"
    }
  },
  {
    "name": "list",
    "componentName": "ListIcon",
    "label": "List",
    "category": "Navigation",
    "tags": [
      "list",
      "navigation"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 5h.01"
        }
      ],
      [
        "path",
        {
          "d": "M3 12h.01"
        }
      ],
      [
        "path",
        {
          "d": "M3 19h.01"
        }
      ],
      [
        "path",
        {
          "d": "M8 5h13"
        }
      ],
      [
        "path",
        {
          "d": "M8 12h13"
        }
      ],
      [
        "path",
        {
          "d": "M8 19h13"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "list",
      "version": "1.31.0"
    }
  },
  {
    "name": "maximize",
    "componentName": "MaximizeIcon",
    "label": "Maximize",
    "category": "Navigation",
    "tags": [
      "maximize",
      "navigation"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M8 3H5a2 2 0 0 0-2 2v3"
        }
      ],
      [
        "path",
        {
          "d": "M21 8V5a2 2 0 0 0-2-2h-3"
        }
      ],
      [
        "path",
        {
          "d": "M3 16v3a2 2 0 0 0 2 2h3"
        }
      ],
      [
        "path",
        {
          "d": "M16 21h3a2 2 0 0 0 2-2v-3"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "maximize",
      "version": "1.31.0"
    }
  },
  {
    "name": "minimize",
    "componentName": "MinimizeIcon",
    "label": "Minimize",
    "category": "Navigation",
    "tags": [
      "minimize",
      "navigation"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M8 3v3a2 2 0 0 1-2 2H3"
        }
      ],
      [
        "path",
        {
          "d": "M21 8h-3a2 2 0 0 1-2-2V3"
        }
      ],
      [
        "path",
        {
          "d": "M3 16h3a2 2 0 0 1 2 2v3"
        }
      ],
      [
        "path",
        {
          "d": "M16 21v-3a2 2 0 0 1 2-2h3"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "minimize",
      "version": "1.31.0"
    }
  },
  {
    "name": "move",
    "componentName": "MoveIcon",
    "label": "Move",
    "category": "Navigation",
    "tags": [
      "move",
      "navigation"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 2v20"
        }
      ],
      [
        "path",
        {
          "d": "m15 19-3 3-3-3"
        }
      ],
      [
        "path",
        {
          "d": "m19 9 3 3-3 3"
        }
      ],
      [
        "path",
        {
          "d": "M2 12h20"
        }
      ],
      [
        "path",
        {
          "d": "m5 9-3 3 3 3"
        }
      ],
      [
        "path",
        {
          "d": "m9 5 3-3 3 3"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "move",
      "version": "1.31.0"
    }
  },
  {
    "name": "square-stack",
    "componentName": "SquareStackIcon",
    "label": "Square stack",
    "category": "Navigation",
    "tags": [
      "square-stack",
      "navigation"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"
        }
      ],
      [
        "path",
        {
          "d": "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"
        }
      ],
      [
        "rect",
        {
          "width": "8",
          "height": "8",
          "x": "14",
          "y": "14",
          "rx": "2"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "square-stack",
      "version": "1.31.0"
    }
  },
  {
    "name": "layers",
    "componentName": "LayersIcon",
    "label": "Layers",
    "category": "Navigation",
    "tags": [
      "layers",
      "navigation"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
        }
      ],
      [
        "path",
        {
          "d": "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
        }
      ],
      [
        "path",
        {
          "d": "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "layers",
      "version": "1.31.0"
    }
  },
  {
    "name": "loader-circle",
    "componentName": "LoaderCircleIcon",
    "label": "Loading",
    "category": "Status",
    "tags": [
      "loader-circle",
      "status"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M21 12a9 9 0 1 1-6.219-8.56"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "loader-circle",
      "version": "1.31.0"
    }
  },
  {
    "name": "refresh-cw",
    "componentName": "RefreshCwIcon",
    "label": "Refresh cw",
    "category": "Status",
    "tags": [
      "refresh-cw",
      "status"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
        }
      ],
      [
        "path",
        {
          "d": "M21 3v5h-5"
        }
      ],
      [
        "path",
        {
          "d": "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
        }
      ],
      [
        "path",
        {
          "d": "M8 16H3v5"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "refresh-cw",
      "version": "1.31.0"
    }
  },
  {
    "name": "rotate-ccw",
    "componentName": "RotateCcwIcon",
    "label": "Rotate ccw",
    "category": "Status",
    "tags": [
      "rotate-ccw",
      "status"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
        }
      ],
      [
        "path",
        {
          "d": "M3 3v5h5"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "rotate-ccw",
      "version": "1.31.0"
    }
  },
  {
    "name": "triangle-alert",
    "componentName": "TriangleAlertIcon",
    "label": "Triangle alert",
    "category": "Status",
    "tags": [
      "triangle-alert",
      "status"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
        }
      ],
      [
        "path",
        {
          "d": "M12 9v4"
        }
      ],
      [
        "path",
        {
          "d": "M12 17h.01"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "triangle-alert",
      "version": "1.31.0"
    }
  },
  {
    "name": "circle-alert",
    "componentName": "CircleAlertIcon",
    "label": "Circle alert",
    "category": "Status",
    "tags": [
      "circle-alert",
      "status"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": "12",
          "cy": "12",
          "r": "10"
        }
      ],
      [
        "line",
        {
          "x1": "12",
          "x2": "12",
          "y1": "8",
          "y2": "12"
        }
      ],
      [
        "line",
        {
          "x1": "12",
          "x2": "12.01",
          "y1": "16",
          "y2": "16"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "circle-alert",
      "version": "1.31.0"
    }
  },
  {
    "name": "circle-check",
    "componentName": "CircleCheckIcon",
    "label": "Circle check",
    "category": "Status",
    "tags": [
      "circle-check",
      "status"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": "12",
          "cy": "12",
          "r": "10"
        }
      ],
      [
        "path",
        {
          "d": "m9 12 2 2 4-4"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "circle-check",
      "version": "1.31.0"
    }
  },
  {
    "name": "circle-x",
    "componentName": "CircleXIcon",
    "label": "Circle x",
    "category": "Status",
    "tags": [
      "circle-x",
      "status"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": "12",
          "cy": "12",
          "r": "10"
        }
      ],
      [
        "path",
        {
          "d": "m15 9-6 6"
        }
      ],
      [
        "path",
        {
          "d": "m9 9 6 6"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "circle-x",
      "version": "1.31.0"
    }
  },
  {
    "name": "clock",
    "componentName": "ClockIcon",
    "label": "Clock",
    "category": "Status",
    "tags": [
      "clock",
      "status"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": "12",
          "cy": "12",
          "r": "10"
        }
      ],
      [
        "path",
        {
          "d": "M12 6v6l4 2"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "clock",
      "version": "1.31.0"
    }
  },
  {
    "name": "eye",
    "componentName": "EyeIcon",
    "label": "Eye",
    "category": "Status",
    "tags": [
      "eye",
      "status"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
        }
      ],
      [
        "circle",
        {
          "cx": "12",
          "cy": "12",
          "r": "3"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "eye",
      "version": "1.31.0"
    }
  },
  {
    "name": "eye-off",
    "componentName": "EyeOffIcon",
    "label": "Eye off",
    "category": "Status",
    "tags": [
      "eye-off",
      "status"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"
        }
      ],
      [
        "path",
        {
          "d": "M14.084 14.158a3 3 0 0 1-4.242-4.242"
        }
      ],
      [
        "path",
        {
          "d": "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"
        }
      ],
      [
        "path",
        {
          "d": "m2 2 20 20"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "eye-off",
      "version": "1.31.0"
    }
  },
  {
    "name": "wifi",
    "componentName": "WifiIcon",
    "label": "Wifi",
    "category": "Status",
    "tags": [
      "wifi",
      "status"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 20h.01"
        }
      ],
      [
        "path",
        {
          "d": "M2 8.82a15 15 0 0 1 20 0"
        }
      ],
      [
        "path",
        {
          "d": "M5 12.859a10 10 0 0 1 14 0"
        }
      ],
      [
        "path",
        {
          "d": "M8.5 16.429a5 5 0 0 1 7 0"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "wifi",
      "version": "1.31.0"
    }
  },
  {
    "name": "wifi-off",
    "componentName": "WifiOffIcon",
    "label": "Wifi off",
    "category": "Status",
    "tags": [
      "wifi-off",
      "status"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 20h.01"
        }
      ],
      [
        "path",
        {
          "d": "M8.5 16.429a5 5 0 0 1 7 0"
        }
      ],
      [
        "path",
        {
          "d": "M5 12.859a10 10 0 0 1 5.17-2.69"
        }
      ],
      [
        "path",
        {
          "d": "M19 12.859a10 10 0 0 0-2.007-1.523"
        }
      ],
      [
        "path",
        {
          "d": "M2 8.82a15 15 0 0 1 4.177-2.643"
        }
      ],
      [
        "path",
        {
          "d": "M22 8.82a15 15 0 0 0-11.288-3.764"
        }
      ],
      [
        "path",
        {
          "d": "m2 2 20 20"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "wifi-off",
      "version": "1.31.0"
    }
  },
  {
    "name": "lock",
    "componentName": "LockIcon",
    "label": "Lock",
    "category": "Security",
    "tags": [
      "lock",
      "security",
      "padlock",
      "locked"
    ],
    "nodes": [
      [
        "rect",
        {
          "width": "18",
          "height": "11",
          "x": "3",
          "y": "11",
          "rx": "2",
          "ry": "2"
        }
      ],
      [
        "path",
        {
          "d": "M7 11V7a5 5 0 0 1 10 0v4"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "lock",
      "version": "1.31.0"
    }
  },
  {
    "name": "lock-open",
    "componentName": "LockOpenIcon",
    "label": "Lock open",
    "category": "Security",
    "tags": [
      "lock-open",
      "security",
      "unlock",
      "unlocked"
    ],
    "nodes": [
      [
        "rect",
        {
          "width": "18",
          "height": "11",
          "x": "3",
          "y": "11",
          "rx": "2",
          "ry": "2"
        }
      ],
      [
        "path",
        {
          "d": "M7 11V7a5 5 0 0 1 9.9-1"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "lock-open",
      "version": "1.31.0"
    }
  },
  {
    "name": "key-round",
    "componentName": "KeyRoundIcon",
    "label": "Key round",
    "category": "Security",
    "tags": [
      "key-round",
      "security",
      "access",
      "authentication"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
        }
      ],
      [
        "circle",
        {
          "cx": "16.5",
          "cy": "7.5",
          "r": ".5",
          "fill": "currentColor"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "key-round",
      "version": "1.31.0"
    }
  },
  {
    "name": "key",
    "componentName": "KeyIcon",
    "label": "Key",
    "category": "Security",
    "tags": [
      "key",
      "security",
      "access",
      "authentication"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"
        }
      ],
      [
        "path",
        {
          "d": "m21 2-9.6 9.6"
        }
      ],
      [
        "circle",
        {
          "cx": "7.5",
          "cy": "15.5",
          "r": "5.5"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "key",
      "version": "1.31.0"
    }
  },
  {
    "name": "shield-check",
    "componentName": "ShieldCheckIcon",
    "label": "Shield check",
    "category": "Security",
    "tags": [
      "shield-check",
      "security"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      [
        "path",
        {
          "d": "m9 12 2 2 4-4"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "shield-check",
      "version": "1.31.0"
    }
  },
  {
    "name": "shield-alert",
    "componentName": "ShieldAlertIcon",
    "label": "Shield alert",
    "category": "Security",
    "tags": [
      "shield-alert",
      "security"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      [
        "path",
        {
          "d": "M12 8v4"
        }
      ],
      [
        "path",
        {
          "d": "M12 16h.01"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "shield-alert",
      "version": "1.31.0"
    }
  },
  {
    "name": "file",
    "componentName": "FileIcon",
    "label": "File",
    "category": "Files",
    "tags": [
      "file",
      "files"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
        }
      ],
      [
        "path",
        {
          "d": "M14 2v5a1 1 0 0 0 1 1h5"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "file",
      "version": "1.31.0"
    }
  },
  {
    "name": "file-text",
    "componentName": "FileTextIcon",
    "label": "File text",
    "category": "Files",
    "tags": [
      "file-text",
      "files"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
        }
      ],
      [
        "path",
        {
          "d": "M14 2v5a1 1 0 0 0 1 1h5"
        }
      ],
      [
        "path",
        {
          "d": "M10 9H8"
        }
      ],
      [
        "path",
        {
          "d": "M16 13H8"
        }
      ],
      [
        "path",
        {
          "d": "M16 17H8"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "file-text",
      "version": "1.31.0"
    }
  },
  {
    "name": "file-music",
    "componentName": "FileMusicIcon",
    "label": "File music",
    "category": "Files",
    "tags": [
      "file-music",
      "files"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35"
        }
      ],
      [
        "path",
        {
          "d": "M14 2v5a1 1 0 0 0 1 1h5"
        }
      ],
      [
        "path",
        {
          "d": "M8 20v-7l3 1.474"
        }
      ],
      [
        "circle",
        {
          "cx": "6",
          "cy": "20",
          "r": "2"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "file-music",
      "version": "1.31.0"
    }
  },
  {
    "name": "file-audio",
    "componentName": "FileMaruIcon",
    "label": "File audio",
    "category": "Files",
    "tags": [
      "file-audio",
      "files"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343"
        }
      ],
      [
        "path",
        {
          "d": "M14 2v5a1 1 0 0 0 1 1h5"
        }
      ],
      [
        "path",
        {
          "d": "M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "file-headphone",
      "version": "1.31.0"
    }
  },
  {
    "name": "file-code-corner",
    "componentName": "FileCodeCornerIcon",
    "label": "Code file",
    "category": "Files",
    "tags": [
      "file-code-corner",
      "files"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"
        }
      ],
      [
        "path",
        {
          "d": "M14 2v5a1 1 0 0 0 1 1h5"
        }
      ],
      [
        "path",
        {
          "d": "m5 16-3 3 3 3"
        }
      ],
      [
        "path",
        {
          "d": "m9 22 3-3-3-3"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "file-code-corner",
      "version": "1.31.0"
    }
  },
  {
    "name": "folder",
    "componentName": "FolderIcon",
    "label": "Folder",
    "category": "Files",
    "tags": [
      "folder",
      "files"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "folder",
      "version": "1.31.0"
    }
  },
  {
    "name": "folder-open",
    "componentName": "FolderOpenIcon",
    "label": "Folder open",
    "category": "Files",
    "tags": [
      "folder-open",
      "files"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "folder-open",
      "version": "1.31.0"
    }
  },
  {
    "name": "folder-plus",
    "componentName": "FolderPlusIcon",
    "label": "Folder plus",
    "category": "Files",
    "tags": [
      "folder-plus",
      "files"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 10v6"
        }
      ],
      [
        "path",
        {
          "d": "M9 13h6"
        }
      ],
      [
        "path",
        {
          "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "folder-plus",
      "version": "1.31.0"
    }
  },
  {
    "name": "trash-2",
    "componentName": "Trash2Icon",
    "label": "Trash 2",
    "category": "Files",
    "tags": [
      "trash-2",
      "files"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M10 11v6"
        }
      ],
      [
        "path",
        {
          "d": "M14 11v6"
        }
      ],
      [
        "path",
        {
          "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"
        }
      ],
      [
        "path",
        {
          "d": "M3 6h18"
        }
      ],
      [
        "path",
        {
          "d": "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "trash-2",
      "version": "1.31.0"
    }
  },
  {
    "name": "pencil",
    "componentName": "PencilIcon",
    "label": "Pencil",
    "category": "Files",
    "tags": [
      "pencil",
      "files"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
        }
      ],
      [
        "path",
        {
          "d": "m15 5 4 4"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "pencil",
      "version": "1.31.0"
    }
  },
  {
    "name": "image",
    "componentName": "ImageIcon",
    "label": "Image",
    "category": "Files",
    "tags": [
      "image",
      "files"
    ],
    "nodes": [
      [
        "rect",
        {
          "width": "18",
          "height": "18",
          "x": "3",
          "y": "3",
          "rx": "2",
          "ry": "2"
        }
      ],
      [
        "circle",
        {
          "cx": "9",
          "cy": "9",
          "r": "2"
        }
      ],
      [
        "path",
        {
          "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "image",
      "version": "1.31.0"
    }
  },
  {
    "name": "camera",
    "componentName": "CameraIcon",
    "label": "Camera",
    "category": "Files",
    "tags": [
      "camera",
      "files"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"
        }
      ],
      [
        "circle",
        {
          "cx": "12",
          "cy": "13",
          "r": "3"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "camera",
      "version": "1.31.0"
    }
  },
  {
    "name": "save-all",
    "componentName": "SaveAllIcon",
    "label": "Save all",
    "category": "Files",
    "tags": [
      "save-all",
      "files"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M10 2v3a1 1 0 0 0 1 1h5"
        }
      ],
      [
        "path",
        {
          "d": "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"
        }
      ],
      [
        "path",
        {
          "d": "M18 22H4a2 2 0 0 1-2-2V6"
        }
      ],
      [
        "path",
        {
          "d": "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "save-all",
      "version": "1.31.0"
    }
  },
  {
    "name": "power-off",
    "componentName": "PowerOffIcon",
    "label": "Power off",
    "category": "Signal",
    "tags": [
      "power-off",
      "signal",
      "off",
      "disable",
      "power off"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M18.36 6.64A9 9 0 0 1 20.77 15"
        }
      ],
      [
        "path",
        {
          "d": "M6.16 6.16a9 9 0 1 0 12.68 12.68"
        }
      ],
      [
        "path",
        {
          "d": "M12 2v4"
        }
      ],
      [
        "path",
        {
          "d": "m2 2 20 20"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "power-off",
      "version": "1.31.0"
    }
  },
  {
    "name": "toggle-left",
    "componentName": "ToggleLeftIcon",
    "label": "Toggle left",
    "category": "Signal",
    "tags": [
      "toggle-left",
      "signal"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": "9",
          "cy": "12",
          "r": "3"
        }
      ],
      [
        "rect",
        {
          "width": "20",
          "height": "14",
          "x": "2",
          "y": "5",
          "rx": "7"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "toggle-left",
      "version": "1.31.0"
    }
  },
  {
    "name": "toggle-right",
    "componentName": "ToggleRightIcon",
    "label": "Toggle right",
    "category": "Signal",
    "tags": [
      "toggle-right",
      "signal"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": "15",
          "cy": "12",
          "r": "3"
        }
      ],
      [
        "rect",
        {
          "width": "20",
          "height": "14",
          "x": "2",
          "y": "5",
          "rx": "7"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "toggle-right",
      "version": "1.31.0"
    }
  },
  {
    "name": "circle-dot",
    "componentName": "CircleDotIcon",
    "label": "Circle dot",
    "category": "Signal",
    "tags": [
      "circle-dot",
      "signal"
    ],
    "nodes": [
      [
        "circle",
        {
          "cx": "12",
          "cy": "12",
          "r": "10"
        }
      ],
      [
        "circle",
        {
          "cx": "12",
          "cy": "12",
          "r": "1"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "circle-dot",
      "version": "1.31.0"
    }
  },
  {
    "name": "radio-tower",
    "componentName": "RadioTowerIcon",
    "label": "Radio tower",
    "category": "Signal",
    "tags": [
      "radio-tower",
      "signal"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M4.9 16.1C1 12.2 1 5.8 4.9 1.9"
        }
      ],
      [
        "path",
        {
          "d": "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"
        }
      ],
      [
        "circle",
        {
          "cx": "12",
          "cy": "9",
          "r": "2"
        }
      ],
      [
        "path",
        {
          "d": "M16.2 4.8c2 2 2.26 5.11.8 7.47"
        }
      ],
      [
        "path",
        {
          "d": "M19.1 1.9a9.96 9.96 0 0 1 0 14.1"
        }
      ],
      [
        "path",
        {
          "d": "M9.5 18h5"
        }
      ],
      [
        "path",
        {
          "d": "m8 22 4-11 4 11"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "radio-tower",
      "version": "1.31.0"
    }
  },
  {
    "name": "radio-receiver",
    "componentName": "RadioReceiverIcon",
    "label": "Radio receiver",
    "category": "Signal",
    "tags": [
      "radio-receiver",
      "signal"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M5 16v2"
        }
      ],
      [
        "path",
        {
          "d": "M19 16v2"
        }
      ],
      [
        "rect",
        {
          "width": "20",
          "height": "8",
          "x": "2",
          "y": "8",
          "rx": "2"
        }
      ],
      [
        "path",
        {
          "d": "M18 12h.01"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "radio-receiver",
      "version": "1.31.0"
    }
  },
  {
    "name": "scan-line",
    "componentName": "ScanLineIcon",
    "label": "Scan line",
    "category": "Signal",
    "tags": [
      "scan-line",
      "signal"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M3 7V5a2 2 0 0 1 2-2h2"
        }
      ],
      [
        "path",
        {
          "d": "M17 3h2a2 2 0 0 1 2 2v2"
        }
      ],
      [
        "path",
        {
          "d": "M21 17v2a2 2 0 0 1-2 2h-2"
        }
      ],
      [
        "path",
        {
          "d": "M7 21H5a2 2 0 0 1-2-2v-2"
        }
      ],
      [
        "path",
        {
          "d": "M7 12h10"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "scan-line",
      "version": "1.31.0"
    }
  },
  {
    "name": "gauge",
    "componentName": "GaugeIcon",
    "label": "Gauge",
    "category": "Signal",
    "tags": [
      "gauge",
      "signal"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m12 14 4-4"
        }
      ],
      [
        "path",
        {
          "d": "M3.34 19a10 10 0 1 1 17.32 0"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "gauge",
      "version": "1.31.0"
    }
  },
  {
    "name": "activity",
    "componentName": "ActivityIcon",
    "label": "Activity",
    "category": "Signal",
    "tags": [
      "activity",
      "signal"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "activity",
      "version": "1.31.0"
    }
  },
  {
    "name": "split",
    "componentName": "SplitIcon",
    "label": "Split",
    "category": "Signal",
    "tags": [
      "split",
      "signal"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M16 3h5v5"
        }
      ],
      [
        "path",
        {
          "d": "M8 3H3v5"
        }
      ],
      [
        "path",
        {
          "d": "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"
        }
      ],
      [
        "path",
        {
          "d": "m15 9 6-6"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "split",
      "version": "1.31.0"
    }
  },
  {
    "name": "merge",
    "componentName": "MergeIcon",
    "label": "Merge",
    "category": "Signal",
    "tags": [
      "merge",
      "signal"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "m8 6 4-4 4 4"
        }
      ],
      [
        "path",
        {
          "d": "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"
        }
      ],
      [
        "path",
        {
          "d": "m20 22-5-5"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "merge",
      "version": "1.31.0"
    }
  },
  {
    "name": "network",
    "componentName": "NetworkIcon",
    "label": "Network",
    "category": "Signal",
    "tags": [
      "network",
      "signal"
    ],
    "nodes": [
      [
        "rect",
        {
          "x": "16",
          "y": "16",
          "width": "6",
          "height": "6",
          "rx": "1"
        }
      ],
      [
        "rect",
        {
          "x": "2",
          "y": "16",
          "width": "6",
          "height": "6",
          "rx": "1"
        }
      ],
      [
        "rect",
        {
          "x": "9",
          "y": "2",
          "width": "6",
          "height": "6",
          "rx": "1"
        }
      ],
      [
        "path",
        {
          "d": "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"
        }
      ],
      [
        "path",
        {
          "d": "M12 12V8"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "network",
      "version": "1.31.0"
    }
  },
  {
    "name": "workflow",
    "componentName": "WorkflowIcon",
    "label": "Workflow",
    "category": "Signal",
    "tags": [
      "workflow",
      "signal"
    ],
    "nodes": [
      [
        "rect",
        {
          "width": "8",
          "height": "8",
          "x": "3",
          "y": "3",
          "rx": "2"
        }
      ],
      [
        "path",
        {
          "d": "M7 11v4a2 2 0 0 0 2 2h4"
        }
      ],
      [
        "rect",
        {
          "width": "8",
          "height": "8",
          "x": "13",
          "y": "13",
          "rx": "2"
        }
      ]
    ],
    "source": {
      "library": "lucide",
      "name": "workflow",
      "version": "1.31.0"
    }
  },
  {
    "name": "mic-pattern-omni",
    "componentName": "MicPatternOmniIcon",
    "label": "Omnidirectional",
    "category": "Microphone patterns",
    "tags": [
      "microphone",
      "pickup",
      "polar",
      "omni"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 4 L10.956 4.068 L9.929 4.273 L8.939 4.609 L8 5.072 L7.13 5.653 L6.343 6.343 L5.653 7.13 L5.072 8 L4.609 8.939 L4.273 9.929 L4.068 10.956 L4 12 L4.068 13.044 L4.273 14.071 L4.609 15.061 L5.072 16 L5.653 16.87 L6.343 17.657 L7.13 18.347 L8 18.928 L8.939 19.391 L9.929 19.727 L10.956 19.932 L12 20 L13.044 19.932 L14.071 19.727 L15.061 19.391 L16 18.928 L16.87 18.347 L17.657 17.657 L18.347 16.87 L18.928 16 L19.391 15.061 L19.727 14.071 L19.932 13.044 L20 12 L19.932 10.956 L19.727 9.929 L19.391 8.939 L18.928 8 L18.347 7.13 L17.657 6.343 L16.87 5.653 L16 5.072 L15.061 4.609 L14.071 4.273 L13.044 4.068 L12 4 Z"
        }
      ]
    ]
  },
  {
    "name": "mic-pattern-subcardioid",
    "componentName": "MicPatternSubcardioidIcon",
    "label": "Wide cardioid",
    "category": "Microphone patterns",
    "tags": [
      "microphone",
      "pickup",
      "polar",
      "subcardioid"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 4 L10.958 4.085 L9.947 4.338 L8.997 4.75 L8.134 5.304 L7.382 5.981 L6.757 6.757 L6.274 7.606 L5.938 8.5 L5.75 9.411 L5.704 10.313 L5.793 11.183 L6 12 L6.31 12.749 L6.704 13.419 L7.164 14.003 L7.67 14.5 L8.206 14.911 L8.757 15.243 L9.313 15.501 L9.866 15.696 L10.411 15.836 L10.947 15.93 L11.476 15.983 L12 16 L12.524 15.983 L13.053 15.93 L13.589 15.836 L14.134 15.696 L14.687 15.501 L15.243 15.243 L15.794 14.911 L16.33 14.5 L16.836 14.003 L17.296 13.419 L17.69 12.749 L18 12 L18.207 11.183 L18.296 10.313 L18.25 9.411 L18.062 8.5 L17.726 7.606 L17.243 6.757 L16.618 5.981 L15.866 5.304 L15.003 4.75 L14.053 4.338 L13.042 4.085 L12 4 Z"
        }
      ]
    ]
  },
  {
    "name": "mic-pattern-cardioid",
    "componentName": "MicPatternCardioidIcon",
    "label": "Cardioid",
    "category": "Microphone patterns",
    "tags": [
      "microphone",
      "pickup",
      "polar",
      "cardioid"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 4 L10.96 4.102 L9.965 4.404 L9.055 4.89 L8.268 5.536 L7.633 6.309 L7.172 7.172 L6.895 8.083 L6.804 9 L6.89 9.883 L7.136 10.697 L7.517 11.41 L8 12 L8.552 12.454 L9.136 12.767 L9.719 12.945 L10.268 13 L10.758 12.953 L11.172 12.828 L11.497 12.656 L11.732 12.464 L11.883 12.281 L11.965 12.132 L11.996 12.034 L12 12 L12.004 12.034 L12.035 12.132 L12.117 12.281 L12.268 12.464 L12.503 12.656 L12.828 12.828 L13.242 12.953 L13.732 13 L14.281 12.945 L14.864 12.767 L15.448 12.454 L16 12 L16.483 11.41 L16.864 10.697 L17.11 9.883 L17.196 9 L17.105 8.083 L16.828 7.172 L16.367 6.309 L15.732 5.536 L14.945 4.89 L14.035 4.404 L13.04 4.102 L12 4 Z"
        }
      ]
    ]
  },
  {
    "name": "mic-pattern-supercardioid",
    "componentName": "MicPatternSupercardioidIcon",
    "label": "Supercardioid",
    "category": "Microphone patterns",
    "tags": [
      "microphone",
      "pickup",
      "polar",
      "supercardioid"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 4 L10.961 4.111 L9.974 4.438 L9.085 4.963 L8.338 5.657 L7.764 6.479 L7.387 7.387 L7.218 8.33 L7.254 9.26 L7.483 10.129 L7.881 10.896 L8.413 11.528 L9.04 12 L9.718 12.3 L10.401 12.428 L11.047 12.395 L11.619 12.22 L11.914 12.066 L11.573 12.427 L11.368 12.824 L11.298 13.217 L11.351 13.567 L11.506 13.843 L11.734 14.019 L12 14.08 L12.266 14.019 L12.494 13.843 L12.649 13.567 L12.702 13.217 L12.632 12.824 L12.427 12.427 L12.086 12.066 L12.381 12.22 L12.953 12.395 L13.599 12.428 L14.282 12.3 L14.96 12 L15.587 11.528 L16.119 10.896 L16.517 10.129 L16.746 9.26 L16.782 8.33 L16.613 7.387 L16.236 6.479 L15.662 5.657 L14.915 4.963 L14.026 4.438 L13.039 4.111 L12 4 Z"
        }
      ]
    ]
  },
  {
    "name": "mic-pattern-hypercardioid",
    "componentName": "MicPatternHypercardioidIcon",
    "label": "Hypercardioid",
    "category": "Microphone patterns",
    "tags": [
      "microphone",
      "pickup",
      "polar",
      "hypercardioid"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 4 L10.962 4.119 L9.982 4.47 L9.113 5.031 L8.402 5.768 L7.885 6.637 L7.586 7.586 L7.516 8.559 L7.67 9.5 L8.031 10.356 L8.568 11.08 L9.241 11.637 L10 12 L10.794 12.159 L11.568 12.116 L11.726 12.113 L11.134 12.5 L10.689 13.006 L10.414 13.586 L10.32 14.19 L10.402 14.768 L10.644 15.274 L11.018 15.666 L11.485 15.915 L12 16 L12.515 15.915 L12.982 15.666 L13.356 15.274 L13.598 14.768 L13.68 14.19 L13.586 13.586 L13.311 13.006 L12.866 12.5 L12.274 12.113 L12.432 12.116 L13.206 12.159 L14 12 L14.759 11.637 L15.432 11.08 L15.969 10.356 L16.33 9.5 L16.484 8.559 L16.414 7.586 L16.115 6.637 L15.598 5.768 L14.887 5.031 L14.018 4.47 L13.038 4.119 L12 4 Z"
        }
      ]
    ]
  },
  {
    "name": "mic-pattern-figure-eight",
    "componentName": "MicPatternFigureEightIcon",
    "label": "Figure eight",
    "category": "Microphone patterns",
    "tags": [
      "microphone",
      "pickup",
      "polar",
      "figure-eight",
      "bidirectional"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 4 L10.965 4.136 L10 4.536 L9.172 5.172 L8.536 6 L8.136 6.965 L8 8 L8.136 9.035 L8.536 10 L9.172 10.828 L10 11.464 L10.965 11.864 L12 12 L10.965 12.136 L10 12.536 L9.172 13.172 L8.536 14 L8.136 14.965 L8 16 L8.136 17.035 L8.536 18 L9.172 18.828 L10 19.464 L10.965 19.864 L12 20 L13.035 19.864 L14 19.464 L14.828 18.828 L15.464 18 L15.864 17.035 L16 16 L15.864 14.965 L15.464 14 L14.828 13.172 L14 12.536 L13.035 12.136 L12 12 L13.035 11.864 L14 11.464 L14.828 10.828 L15.464 10 L15.864 9.035 L16 8 L15.864 6.965 L15.464 6 L14.828 5.172 L14 4.536 L13.035 4.136 L12 4 Z"
        }
      ]
    ]
  },
  {
    "name": "mic-placement-mono",
    "componentName": "MicPlacementMonoIcon",
    "label": "Mono mic",
    "category": "Microphone placement",
    "tags": [
      "single",
      "microphone",
      "placement"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M10.6 12 L10.6 18 L13.4 18 L13.4 12 L10.6 12Z"
        }
      ],
      [
        "path",
        {
          "d": "M12 11L12 6M10.5 7.5L12 6L13.5 7.5"
        }
      ]
    ]
  },
  {
    "name": "mic-placement-spaced-pair",
    "componentName": "MicPlacementSpacedPairIcon",
    "label": "Spaced pair",
    "category": "Microphone placement",
    "tags": [
      "ab",
      "stereo",
      "microphone",
      "placement"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M4.6 11 L4.6 17 L7.4 17 L7.4 11 L4.6 11Z"
        }
      ],
      [
        "path",
        {
          "d": "M6 10L6 5M4.5 6.5L6 5L7.5 6.5"
        }
      ],
      [
        "path",
        {
          "d": "M16.6 11 L16.6 17 L19.4 17 L19.4 11 L16.6 11Z"
        }
      ],
      [
        "path",
        {
          "d": "M18 10L18 5M16.5 6.5L18 5L19.5 6.5"
        }
      ]
    ]
  },
  {
    "name": "mic-placement-xy",
    "componentName": "MicPlacementXyIcon",
    "label": "XY pair",
    "category": "Microphone placement",
    "tags": [
      "coincident",
      "stereo",
      "90 degrees",
      "double cardioid",
      "microphone"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M10.01 11.99 L14.253 16.233 L16.233 14.253 L11.99 10.01 L10.01 11.99Z"
        }
      ],
      [
        "path",
        {
          "d": "M10.293 10.293L6.757 6.757M6.757 8.879L6.757 6.757L8.879 6.757"
        }
      ],
      [
        "path",
        {
          "d": "M12.01 10.01 L7.767 14.253 L9.747 16.233 L13.99 11.99 L12.01 10.01Z"
        }
      ],
      [
        "path",
        {
          "d": "M13.707 10.293L17.243 6.757M15.121 6.757L17.243 6.757L17.243 8.879"
        }
      ]
    ]
  },
  {
    "name": "mic-placement-ortf",
    "componentName": "MicPlacementOrtfIcon",
    "label": "ORTF pair",
    "category": "Microphone placement",
    "tags": [
      "near coincident",
      "110 degrees",
      "17 cm",
      "microphone"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M6.697 12.147 L11.612 15.588 L13.218 13.295 L8.303 9.853 L6.697 12.147Z"
        }
      ],
      [
        "path",
        {
          "d": "M6.681 10.426L2.585 7.559M2.953 9.648L2.585 7.559L4.674 7.19"
        }
      ],
      [
        "path",
        {
          "d": "M15.697 9.853 L10.782 13.295 L12.388 15.588 L17.303 12.147 L15.697 9.853Z"
        }
      ],
      [
        "path",
        {
          "d": "M17.319 10.426L21.415 7.559M19.326 7.19L21.415 7.559L21.047 9.648"
        }
      ]
    ]
  },
  {
    "name": "mic-placement-mid-side",
    "componentName": "MicPlacementMidSideIcon",
    "label": "Mid-side",
    "category": "Microphone placement",
    "tags": [
      "ms",
      "cardioid",
      "figure eight",
      "microphone"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 4 L10.96 4.102 L9.965 4.404 L9.055 4.89 L8.268 5.536 L7.633 6.309 L7.172 7.172 L6.895 8.083 L6.804 9 L6.89 9.883 L7.136 10.697 L7.517 11.41 L8 12 L8.552 12.454 L9.136 12.767 L9.719 12.945 L10.268 13 L10.758 12.953 L11.172 12.828 L11.497 12.656 L11.732 12.464 L11.883 12.281 L11.965 12.132 L11.996 12.034 L12 12 L12.004 12.034 L12.035 12.132 L12.117 12.281 L12.268 12.464 L12.503 12.656 L12.828 12.828 L13.242 12.953 L13.732 13 L14.281 12.945 L14.864 12.767 L15.448 12.454 L16 12 L16.483 11.41 L16.864 10.697 L17.11 9.883 L17.196 9 L17.105 8.083 L16.828 7.172 L16.367 6.309 L15.732 5.536 L14.945 4.89 L14.035 4.404 L13.04 4.102 L12 4 Z"
        }
      ],
      [
        "path",
        {
          "d": "M20 12 L19.864 10.965 L19.464 10 L18.828 9.172 L18 8.536 L17.035 8.136 L16 8 L14.965 8.136 L14 8.536 L13.172 9.172 L12.536 10 L12.136 10.965 L12 12 L11.864 10.965 L11.464 10 L10.828 9.172 L10 8.536 L9.035 8.136 L8 8 L6.965 8.136 L6 8.536 L5.172 9.172 L4.536 10 L4.136 10.965 L4 12 L4.136 13.035 L4.536 14 L5.172 14.828 L6 15.464 L6.965 15.864 L8 16 L9.035 15.864 L10 15.464 L10.828 14.828 L11.464 14 L11.864 13.035 L12 12 L12.136 13.035 L12.536 14 L13.172 14.828 L14 15.464 L14.965 15.864 L16 16 L17.035 15.864 L18 15.464 L18.828 14.828 L19.464 14 L19.864 13.035 L20 12 Z"
        }
      ]
    ]
  },
  {
    "name": "mic-placement-blumlein",
    "componentName": "MicPlacementBlumleinIcon",
    "label": "Blumlein pair",
    "category": "Microphone placement",
    "tags": [
      "crossed figure eight",
      "90 degrees",
      "microphone"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M17.657 6.343 L16.828 5.707 L15.864 5.308 L14.828 5.172 L13.793 5.308 L12.828 5.707 L12 6.343 L11.364 7.172 L10.965 8.136 L10.828 9.172 L10.965 10.207 L11.364 11.172 L12 12 L11.172 11.364 L10.207 10.965 L9.172 10.828 L8.136 10.965 L7.172 11.364 L6.343 12 L5.707 12.828 L5.308 13.793 L5.172 14.828 L5.308 15.864 L5.707 16.828 L6.343 17.657 L7.172 18.293 L8.136 18.692 L9.172 18.828 L10.207 18.692 L11.172 18.293 L12 17.657 L12.636 16.828 L13.035 15.864 L13.172 14.828 L13.035 13.793 L12.636 12.828 L12 12 L12.828 12.636 L13.793 13.035 L14.828 13.172 L15.864 13.035 L16.828 12.636 L17.657 12 L18.293 11.172 L18.692 10.207 L18.828 9.172 L18.692 8.136 L18.293 7.172 L17.657 6.343 Z"
        }
      ],
      [
        "path",
        {
          "d": "M6.343 6.343 L5.707 7.172 L5.308 8.136 L5.172 9.172 L5.308 10.207 L5.707 11.172 L6.343 12 L7.172 12.636 L8.136 13.035 L9.172 13.172 L10.207 13.035 L11.172 12.636 L12 12 L11.364 12.828 L10.965 13.793 L10.828 14.828 L10.965 15.864 L11.364 16.828 L12 17.657 L12.828 18.293 L13.793 18.692 L14.828 18.828 L15.864 18.692 L16.828 18.293 L17.657 17.657 L18.293 16.828 L18.692 15.864 L18.828 14.828 L18.692 13.793 L18.293 12.828 L17.657 12 L16.828 11.364 L15.864 10.965 L14.828 10.828 L13.793 10.965 L12.828 11.364 L12 12 L12.636 11.172 L13.035 10.207 L13.172 9.172 L13.035 8.136 L12.636 7.172 L12 6.343 L11.172 5.707 L10.207 5.308 L9.172 5.172 L8.136 5.308 L7.172 5.707 L6.343 6.343 Z"
        }
      ]
    ]
  },
  {
    "name": "mic-placement-back-to-back",
    "componentName": "MicPlacementBackToBackIcon",
    "label": "Back-to-back cardioids",
    "category": "Microphone placement",
    "tags": [
      "double cardioid",
      "dual cardioid",
      "opposed",
      "microphone"
    ],
    "nodes": [
      [
        "path",
        {
          "d": "M12 4 L10.96 4.102 L9.965 4.404 L9.055 4.89 L8.268 5.536 L7.633 6.309 L7.172 7.172 L6.895 8.083 L6.804 9 L6.89 9.883 L7.136 10.697 L7.517 11.41 L8 12 L8.552 12.454 L9.136 12.767 L9.719 12.945 L10.268 13 L10.758 12.953 L11.172 12.828 L11.497 12.656 L11.732 12.464 L11.883 12.281 L11.965 12.132 L11.996 12.034 L12 12 L12.004 12.034 L12.035 12.132 L12.117 12.281 L12.268 12.464 L12.503 12.656 L12.828 12.828 L13.242 12.953 L13.732 13 L14.281 12.945 L14.864 12.767 L15.448 12.454 L16 12 L16.483 11.41 L16.864 10.697 L17.11 9.883 L17.196 9 L17.105 8.083 L16.828 7.172 L16.367 6.309 L15.732 5.536 L14.945 4.89 L14.035 4.404 L13.04 4.102 L12 4 Z"
        }
      ],
      [
        "path",
        {
          "d": "M12 20 L13.04 19.898 L14.035 19.596 L14.945 19.11 L15.732 18.464 L16.367 17.691 L16.828 16.828 L17.105 15.917 L17.196 15 L17.11 14.117 L16.864 13.303 L16.483 12.59 L16 12 L15.448 11.546 L14.864 11.233 L14.281 11.055 L13.732 11 L13.242 11.047 L12.828 11.172 L12.503 11.344 L12.268 11.536 L12.117 11.719 L12.035 11.868 L12.004 11.966 L12 12 L11.996 11.966 L11.965 11.868 L11.883 11.719 L11.732 11.536 L11.497 11.344 L11.172 11.172 L10.758 11.047 L10.268 11 L9.719 11.055 L9.136 11.233 L8.552 11.546 L8 12 L7.517 12.59 L7.136 13.303 L6.89 14.117 L6.804 15 L6.895 15.917 L7.172 16.828 L7.633 17.691 L8.268 18.464 L9.055 19.11 L9.965 19.596 L10.96 19.898 L12 20 Z"
        }
      ]
    ]
  },
  {
    "name": "maru-logo",
    "componentName": "MaruLogoIcon",
    "label": "Maru logo",
    "category": "Brand",
    "tags": [
      "maru",
      "logo",
      "wordmark",
      "brand"
    ],
    "brandAsset": "wordmark",
    "viewBox": "0 0 1791 367",
    "nodes": [
      [
        "path",
        {
          "d": "M62,105c5.61,8.42,15.86,15.1,22,23c8.67,11.17,19.18,21.9,28.77,32.58c2.08,2.32,5.44,4.1,7.23,6.42c15.9,20.51,36.22,40.71,54.86,58.8c39.49,38.29,82.35,36.39,124.14,3.2c1.91-1.52,3.11-4.41,5-6c11.22-9.49,21.55-19.58,32-30c16.58-16.53,34.18-32.03,50.52-48.8c8.85-9.1,29.37-33.15,39.48-38.2c-.04,58.1-.08,116.19-.09,174.29c-.01,18.85-3.22,60.28,1.09,76.71c7.56,.05,57.16,1.6,59-2c.16-.31-1.14-73.24-1.13-80.76c.03-64.86,1.64-129.36,0-193.57c-.31-12.11,1.31-23.84,1.54-35.63c.09-4.46-1.36-8.9-1.29-13.32C485.28,21.7,486.17,13.15,484,3c-11.15-.09-27.83-1.88-37.78,3.77c-3.51,1.99-5.53,5.66-8.57,8.26C422.08,28.37,408.48,43.57,394,58c-27.22,27.13-54.79,53.88-82,81c-4.62,4.61-18.03,14.79-21,19c-8.35,11.84-31.11,33.66-45.95,37.77c-9.13,2.53-21.53-2.06-28.68-7.69c-12.4-9.77-23.65-24.06-33.37-36.08c-1.55-1.91-4.4-3.11-6-5c-15.91-18.82-33.22-37.06-49.75-55.55c-2.15-2.4-5.27-4.09-7.25-6.45C104.46,66.47,87.32,48.5,70.36,31.15C62.57,23.18,55.89,14.11,47.13,7.08C42.17,3.11,5.34-.11,2.54,4.66c-2.69,4.57-.8,23.32-.79,29.3c.04,28.74,.01,57.49,.02,86.23c.01,32.44,.04,64.88,.04,97.32c.01,31.6,0,63.2,.04,94.79C1.86,326.19-.12,343.56,3,357c18.05,.06,40.49,2.69,58-1c-.04-59.03-.08-118.06-.09-177.08C60.9,161.6,57.82,119.67,62,105Z",
          "fill": "currentColor",
          "stroke": "none"
        }
      ],
      [
        "path",
        {
          "d": "M1333,357c-5.41-11.11-16.39-22.1-24-32c-18.3-23.81-37.18-47.34-56.28-70.52c-6.99-8.5-19.36-20.76-23.72-30.48c4.38-4.38,21.9-7.48,28.66-9.92c19.66-7.09,44.63-21.9,56.69-39.71c20.05-29.6,20.82-49.92,17.65-84.37c-1.45-15.79-10.68-33.19-20.99-45.15C1269.15-3.72,1204.58,2.84,1145.55,2.82c-33.92-.01-67.84-.05-101.76-.07c-4.9,0-30.79-1.28-32.96,1.54c-3.9,5.08,2.03,67.97,.17,80.71c-3.37,23.13-1.2,49.6-1.06,72.97c.01,2.93,1.25,6.23,1.06,9.03c-2.65,38.88-1.13,78.7-1.14,117.8c0,23.09-2.55,49.51,1.14,72.2c18.22,.06,40.27,2.55,58-1c0-100,0-200,0-300c34.04,0,68.13-1.12,102.16-1.05c24.61,.05,69.96-3.78,86.84,17.55c9.41,11.91,13.1,17.27,16,32.5c2.35,12.35,.06,25.6-5,37c-16.61,37.42-52.18,42.2-88.69,41.98c-9.57-.05-22.24-1.51-31.01,2.85c-3.56,1.78-5.86,5.94-6.96,9.66c-1.16,3.95-.46,9.26,1.59,12.83c5.45,9.49,18.32,22.11,25.77,31.12c16.6,20.09,32.49,40.8,49.18,60.81c5.94,7.12,41.92,53.9,45.54,55.67c5.39,2.66,58.78,.21,68.58,.08Z",
          "fill": "currentColor",
          "stroke": "none"
        }
      ],
      [
        "path",
        {
          "d": "M1787,3c-12.76-.1-41.22-3.72-52,2c.04,42.74,.06,85.47,.09,128.21c.02,32.25,3.58,68.16-5.44,99.3c-19.08,65.81-92.45,84.05-152.85,79.13c-41.64-3.38-76.23-19.56-96.8-56.64c-5.79-10.44-10.86-21.08-12.28-33.22c-2.84-24.14-1.76-48.53-1.72-72.87c.05-37.6,.14-75.2,.2-112.8c.01-4.93,1.26-31.04-2.2-33.11c-1.34-.8-48.15-.69-52.74-.13c-1.01,.13-2.34,.23-2.92,1.2c-2.77,4.66-.57,55.89-.57,65.09c.02,28.97,.04,57.93,.06,86.9c.04,61.47,1.05,107.19,45.61,154.41c57.43,60.87,171.37,69.25,243.87,34.11c34.71-16.83,64.03-45.25,79.89-80.96c13.7-30.85,10.93-65.83,10.93-98.86c.01-28.63,0-57.26,.01-85.89c0-19.22,3.11-58.94-1.14-75.87Z",
          "fill": "currentColor",
          "stroke": "none"
        }
      ],
      [
        "path",
        {
          "d": "M534,357c10.87,.03,57.3,2.4,64.4-.9c2.81-1.3,22.21-34.62,25-39.47c15.98-27.71,34.29-54.77,51.6-81.63c13.32-20.67,24.72-44.02,39.44-63.94c10.97-14.85,21.1-32.69,30.53-48.74c.79-1.34,1.95-4.43,4.03-3.32c1.91,1.02,59.94,99.68,66.49,110.84c18.61,31.71,38.4,63.33,56.91,95.53c6.09,10.57,13.09,20.61,18.6,31.63c21.67,0,43.33,0,65,0c1.43-2.85-6.79-15.35-9-19c-18.82-31.14-36.22-63.22-56-94c-15.18-23.61-27.51-49.45-43-73c-13.61-20.7-24.2-43.26-38-64c-2.65-3.98-4.25-9.1-6.92-13.22c-14.42-22.26-26.93-45.95-41.71-68.4C757.09,18.88,754.07,12.12,749,6c-11.94,15.92-20.31,33.81-31.25,50.29C696.33,88.57,676.99,122.42,656,155c-10.92,16.94-20.14,35.55-31.25,52.29c-22.16,33.4-43.28,68.61-63.15,103.08c-8.78,15.22-21.37,30.31-27.6,46.63Z",
          "fill": "currentColor",
          "stroke": "none"
        }
      ]
    ]
  },
  {
    "name": "maru-wave",
    "componentName": "MaruWaveIcon",
    "label": "Maru wave",
    "category": "Brand",
    "tags": [
      "maru",
      "wave",
      "signal",
      "brand"
    ],
    "brandAsset": "signal-mark",
    "viewBox": "0 10 224 80",
    "defaultStrokeWidth": 1.5,
    "strokeLinecap": "butt",
    "nodes": [
      [
        "path",
        {
          "d": "M8 78c18 0 27-12 35-31 7-18 17-27 27-26 12 1 20 13 26 31 5 16 10 26 20 26 10 0 16-11 23-24 7-12 15-17 24-15 11 3 18 14 24 26 5 10 14 13 29 13"
        }
      ]
    ]
  }
]
