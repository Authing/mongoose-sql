// Simple mongoose test
// TODO: refactor to unit test

const mongoose = require('../index.js');
const Schema = mongoose.Schema;

PackageSchema = new Schema({

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name cannot be blank'
  },
  cptPackageId: {
    type: Number,
    required: 'CPT package ID is required'
  },
  cptPackageName: {
    type: String
  },
  cardImage: {
    type: String
  },
  featureSticker: {
    type: Schema.ObjectId,
    ref: 'Sticker'
  },
  category: {
    type: Schema.ObjectId,
    ref: 'Category'
  },
  onReserve: {
    type: Boolean,
    default: false
  },
  priority: {
    type: Number
  },

  customTrailer: {
    type: String
  },
  description: {
    type: String
  },

  segments: [{
    type: String
  }],

  oneSheet: {
    type: String
  },

  caseStudy: {
    type: String
  },

  insightsDeck: {
    type: String
  },

  featuredVideos: [{
    type: String
  }],

  recommendedPackages: [{
    type: Schema.ObjectId,
    ref: 'Package'
  }],

  videoExamples: [{
    numViews: {
      type: Number
    },
    publishTs: {
      type: String
    },
    title: {
      type: String
    },
    ytVideoId: {
      type: String
    },
  }],


  statsCache: {
    statistics: {
      type: Object
    },
    timeSeries: {
      type: Object
    },
    date: {
      type: Date
    }
  },


  cartridgeIdsCache: {
    cartridgeIds: {
      type: Array
    },
    date: {
      type: Date
    }
  },


  pkgOverRides: {
    numViews: {
      type: Number,
      default: null
    },
    numVideos: {
      type: Number,
      default: null
    },
    numSubscribers: {
      type: Number,
      default: null
    },
    forecastedImpressions: {
      type: Number,
      default: null
    },
    numEngagements: {
      type: Number,
      default: null
    },
    numChannels: {
      type: Number,
      default: null
    },
    avgForecastedViews: {
      type: Number,
      default: null
    }
  },

  pkgStatsVisibility: {
    numViews: {
      type: Boolean,
      default: false
    },
    numVideos: {
      type: Boolean,
      default: false
    },
    numSubscribers: {
      type: Boolean,
      default: false
    },
    forecastedImpressions: {
      type: Boolean,
      default: false
    },
    numEngagements: {
      type: Boolean,
      default: false
    },
    numChannels: {
      type: Boolean,
      default: false
    },
    avgForecastedViews: {
      type: Boolean,
      default: false
    }
  },

  zInfluencers: [{
    type: Number
  }],


  status: {
    type: String,
    default: 'coming soon'
  },

  created: {
    type: Date,
    default: Date.now
  },

  updated: {
    type: Date,
    default: Date.now
  }
})

Package = mongoose.model('Package', PackageSchema)

// Category
CategorySchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank',
    unique: true
  },
  description: {
    type: String,
    default: '',
    trim: true,
    priority: {
      type: Number
    }
  },
  posh: {
    type: Boolean,
    default: false
  }
});

Category = mongoose.model('Category', CategorySchema);

// Sticker Model

StickerSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  label: {
    type: String,
    default: '',
    trim: true,
    lowercase: true,
    required: 'label cannot be blank',
    unique: true
  }
});

mongoose.model('Sticker', StickerSchema);